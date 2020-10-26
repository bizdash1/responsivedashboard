const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/users_controller');

router.get('/profile', passport.checkAuthentication, usersController.profile);
router.get('/signup', usersController.signUp);
router.get('/signin', usersController.signIn);
router.post('/create', usersController.create);
router.post('/create_session', passport.authenticate(
    'local', {
        failureRedirect : '/users/signin'
    },
) ,usersController.create_session);
router.get('/logout', usersController.destroySession);
router.get('/forgot_password', usersController.forgot_password);
router.post('/forgot_password', usersController.reset_password);
router.get('/reset/:token', usersController.reset);
router.post('/reset/:token', usersController.reset_done);

module.exports = router;