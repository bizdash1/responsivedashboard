fetch('/json/paypalTransaction.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendDataPpTran(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

function appendDataPpTran(data) {

  let table = document.getElementById("ppTran");

  for (let transactions of data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    let th1 = document.createElement("th");
    let text1 = document.createTextNode("Amount");
    let th2 = document.createElement("th");
    let text2 = document.createTextNode("Name");
    th1.appendChild(text1);
    row.appendChild(th1);
    th2.appendChild(text2);
    row.appendChild(th2);

    for (let transaction_detail of transactions.transaction_details) {
      let row = table.insertRow();
      let cell1 = row.insertCell();
      let text1 = document.createTextNode(transaction_detail.transaction_info.transaction_amount.value);
      cell1.appendChild(text1);
      let cell2 = row.insertCell();
      let text2 = document.createTextNode(transaction_detail.payer_info.payer_name.alternate_full_name);
      cell2.appendChild(text2);
    }
  }
}

// Paypal data fetch
fetch('/json/paypalBalance.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendDataPpBal(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendDataPpBal(data) {
  let dataSet = {
    total_balance: data[0].balances[0].total_balance.value,
    available_balance: data[0].balances[0].available_balance.value,
    withheld_balance: data[0].balances[0].withheld_balance.value,
  };

  function generateTableHead(table, data2) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data2) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  function generateTable(table, data2) {
      let row = table.insertRow();
    for (let element in data2) {

        let cell = row.insertCell();
        let text = document.createTextNode(data2[element]);
        cell.appendChild(text);
    }
  }

  let table = document.getElementById("payPal");
  let data2 = Object.keys(dataSet);

  generateTableHead(table, data2);
  generateTable(table, dataSet);
}

$(function () {
  $("#loginButton").click(function () {
      $("#loginModal").modal('show');
  });
});