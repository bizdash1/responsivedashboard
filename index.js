const express = require('express');
const port = 8000;
const path = require('path');
const db = require('./config/mongoose');
const expresLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const mongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const customMWare = require('./config/middleware');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('assets'));
//app.use(expresLayouts);
app.use(session({
    name : 'bizdash',
    secret : 'blahsomething',
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : (1000*60*100)
    },
    store : new mongoStore({
        mongooseConnection : db,
        autoRemove : 'disabled'
    }, function(err) {
        console.log(err || 'connect-mongo-setup is ok');
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(customMWare.setFlash);
app.use('/', require('./routes'));

app.listen(port, function(err) {
    if (err) {
        console.log('Error in running the server onport: '+err);
        return;
    }
    console.log('Server is running perfectly on port: '+port);
})