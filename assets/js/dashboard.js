// Other important pens.
// Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
// Navbar: https://codepen.io/themustafaomar/pen/VKbQyZ

$(function () {

  'use strict';

  // dropdown menu in the side nav
  var slideNavDropdown = $('.side-nav-dropdown');

  $('.side-nav .categories li').on('click', function () {

    var $this = $(this)

    $this.toggleClass('opend').siblings().removeClass('opend');

    if ($this.hasClass('opend')) {
      $this.find('.side-nav-dropdown').slideToggle('fast');
      $this.siblings().find('.side-nav-dropdown').slideUp('fast');
    } else {
      $this.find('.side-nav-dropdown').slideUp('fast');
    }
  });

  $('.side-nav .close-aside').on('click', function () {
    $('#' + $(this).data('close')).addClass('show-side-nav');
    contents.removeClass('margin');
  });


  // Start monthly chart
  var chart = document.getElementById('payPal12m');
  Chart.defaults.global.animation.duration = 2000; // Animation duration
  Chart.defaults.global.title.display = false; // Remove title
  Chart.defaults.global.title.text = "Chart"; // Title
  Chart.defaults.global.title.position = 'bottom'; // Title position
  Chart.defaults.global.defaultFontColor = '#999'; // Font color
  Chart.defaults.global.defaultFontSize = 10; // Font size for every label

  // Chart.defaults.global.tooltips.backgroundColor = '#FFF'; // Tooltips background color
  Chart.defaults.global.tooltips.borderColor = 'white'; // Tooltips border color
  Chart.defaults.global.legend.labels.padding = 0;
  Chart.defaults.scale.ticks.beginAtZero = true;
  Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 0.1)';
  Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0.02)';
  Chart.defaults.global.legend.display = false;

  var payPal12m = new Chart(chart, {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: "Lost",
        fill: false,
        lineTension: 0,
        data: [45, 25, 40, 20, 45, 20],
        backgroundColor: "#4bc0c0",
        pointBorderColor: "#4bc0c0",
        borderColor: '#4bc0c0',
        borderWidth: 2,
        showLine: true,
      }, 
    ]
    },
  });

  //  Chart ( 2 )
  var Chart2 = document.getElementById('payPal12mandStripe12m').getContext('2d');
  var chart = new Chart(Chart2, {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 79, 116)',
        borderWidth: 2,
        pointBorderColor: false,
        data: [5, 10, 5, 8, 20, 30, 20, 10],
        fill: false,
        lineTension: .4,
      }, {
        label: "Month",
        fill: false,
        lineTension: .4,
        startAngle: 2,
        data: [20, 14, 20, 25, 10, 15, 25, 10],
        // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
        backgroundColor: "transparent",
        pointBorderColor: "#4bc0c0",
        borderColor: '#4bc0c0',
        borderWidth: 2,
        showLine: true,
      }]
    },

    // Configuration options
    options: {
      title: {
        display: false
      }
    }
  });

  var chart = document.getElementById('stripe12m');
  var myChart2 = new Chart(chart, {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: "Succes",
        fill: false,
        lineTension: 0,
        startAngle: 2,
        data: [20, 40, 20, 45, 25, 60],
        // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
        backgroundColor: "#ff6384",
        pointBorderColor: "#ff6384",
        borderColor: '#ff6384',
        borderWidth: 2,
        showLine: true,
      },]
    },
  });

    // Start daily chart
    var chart = document.getElementById('payPal15d');
    Chart.defaults.global.animation.duration = 2000; // Animation duration
    Chart.defaults.global.title.display = false; // Remove title
    Chart.defaults.global.title.text = "Chart"; // Title
    Chart.defaults.global.title.position = 'bottom'; // Title position
    Chart.defaults.global.defaultFontColor = '#999'; // Font color
    Chart.defaults.global.defaultFontSize = 10; // Font size for every label
  
    // Chart.defaults.global.tooltips.backgroundColor = '#FFF'; // Tooltips background color
    Chart.defaults.global.tooltips.borderColor = 'white'; // Tooltips border color
    Chart.defaults.global.legend.labels.padding = 0;
    Chart.defaults.scale.ticks.beginAtZero = true;
    Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 0.1)';
    Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0.02)';
    Chart.defaults.global.legend.display = false;
  
    var payPal15d = new Chart(chart, {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        datasets: [{
          label: "Lost",
          fill: false,
          lineTension: 0,
          data: [45, 25, 40, 20, 45, 20],
          backgroundColor: "#4bc0c0",
          pointBorderColor: "#4bc0c0",
          borderColor: '#4bc0c0',
          borderWidth: 2,
          showLine: true,
        }, 
      ]
      },
    });
  
    //  Chart ( 2 )
    var Chart2 = document.getElementById('payPal15dandStripe15d').getContext('2d');
    var chart = new Chart(Chart2, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        datasets: [{
          label: "My First dataset",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 79, 116)',
          borderWidth: 2,
          pointBorderColor: false,
          data: [5, 10, 5, 8, 20, 30, 20, 10],
          fill: false,
          lineTension: .4,
        }, {
          label: "Month",
          fill: false,
          lineTension: .4,
          startAngle: 2,
          data: [20, 14, 20, 25, 10, 15, 25, 10],
          // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
          backgroundColor: "transparent",
          pointBorderColor: "#4bc0c0",
          borderColor: '#4bc0c0',
          borderWidth: 2,
          showLine: true,
        }]
      },
  
      // Configuration options
      options: {
        title: {
          display: false
        }
      }
    });
  
    var chart = document.getElementById('stripe15d');
    var myChart2 = new Chart(chart, {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        datasets: [{
          label: "Succes",
          fill: false,
          lineTension: 0,
          startAngle: 2,
          data: [20, 40, 20, 45, 25, 60],
          // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
          backgroundColor: "#ff6384",
          pointBorderColor: "#ff6384",
          borderColor: '#ff6384',
          borderWidth: 2,
          showLine: true,
        },]
      },
    });
  
});

