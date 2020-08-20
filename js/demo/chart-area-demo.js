// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

//query month
var May = db.collection('transactions').where("time", ">=", new Date("January 01, 2020")).where("time", "<", new Date("January 31, 2020")).get().then((snapshot) => {
  // valueReport.May = snapshot.docs.length;
  console.log(snapshot.docs.length);
  // valueReport.push(snapshot.docs.length);
  myLineChart.data.datasets.forEach((dataset) => {
    dataset.data[0] = snapshot.docs.length * 10;
  });
  myLineChart.update();
})
var May = db.collection('transactions').where("time", ">=", new Date("February 01, 2020")).where("time", "<", new Date("February 29, 2020")).get().then((snapshot) => {
  // valueReport.May = snapshot.docs.length;
  console.log(snapshot.docs.length);
  // valueReport.push(snapshot.docs.length);
  myLineChart.data.datasets.forEach((dataset) => {
    dataset.data[1] = snapshot.docs.length * 10;
  });
  myLineChart.update();
})
var May = db.collection('transactions').where("time", ">=", new Date("March 01, 2020")).where("time", "<", new Date("March 31, 2020")).get().then((snapshot) => {
  // valueReport.May = snapshot.docs.length;
  console.log(snapshot.docs.length);
  // valueReport.push(snapshot.docs.length);
  myLineChart.data.datasets.forEach((dataset) => {
    dataset.data[2] = snapshot.docs.length * 10;
  });
  myLineChart.update();
})

var May = db.collection('transactions').where("time", ">=", new Date("April 01, 2020")).where("time", "<", new Date("April 30, 2020")).get().then((snapshot) => {
  // valueReport.May = snapshot.docs.length;
  console.log(snapshot.docs.length);
  // valueReport.push(snapshot.docs.length);
  myLineChart.data.datasets.forEach((dataset) => {
    dataset.data[3] = snapshot.docs.length * 10;
  });
  myLineChart.update();
})

var May = db.collection('transactions').where("time", ">=", new Date("May 01, 2020")).where("time", "<", new Date("May 30, 2020")).get().then((snapshot) => {
  // valueReport.May = snapshot.docs.length;
  console.log(snapshot.docs.length);
  // valueReport.push(snapshot.docs.length);
  myLineChart.data.datasets.forEach((dataset) => {
    dataset.data[4] = snapshot.docs.length * 10;
  });
  myLineChart.update();
})

var May = db.collection('transactions').where("time", ">=", new Date("June 01, 2020")).where("time", "<", new Date("June 31, 2020")).get().then((snapshot) => {
  // valueReport.May = snapshot.docs.length;
  console.log(snapshot.docs.length);
  // valueReport.push(snapshot.docs.length);
  myLineChart.data.datasets.forEach((dataset) => {
    dataset.data[5] = snapshot.docs.length * 10;
  });
  myLineChart.update();
})

var May = db.collection('transactions').where("time", ">=", new Date("July 01, 2020")).where("time", "<", new Date("July 30, 2020")).get().then((snapshot) => {
  // valueReport.May = snapshot.docs.length;
  console.log(snapshot.docs.length);
  // valueReport.push(snapshot.docs.length);
  myLineChart.data.datasets.forEach((dataset) => {
    dataset.data[6] = snapshot.docs.length * 10;
  });
  myLineChart.update();
})

var May = db.collection('transactions').where("time", ">=", new Date("August 01, 2020")).where("time", "<", new Date("August 31, 2020")).get().then((snapshot) => {
  // valueReport.May = snapshot.docs.length;
  console.log(snapshot.docs.length);
  // valueReport.push(snapshot.docs.length);
  myLineChart.data.datasets.forEach((dataset) => {
    dataset.data[7] = snapshot.docs.length * 10;
  });
  myLineChart.update();
})

var May = db.collection('transactions').where("time", ">=", new Date("September 01, 2020")).where("time", "<", new Date("September 30, 2020")).get().then((snapshot) => {
  // valueReport.May = snapshot.docs.length;
  console.log(snapshot.docs.length);
  // valueReport.push(snapshot.docs.length);
  myLineChart.data.datasets.forEach((dataset) => {
    dataset.data[8] = snapshot.docs.length * 10;
  });
  myLineChart.update();
})

var May = db.collection('transactions').where("time", ">=", new Date("October 01, 2020")).where("time", "<", new Date("October 31, 2020")).get().then((snapshot) => {
  // valueReport.May = snapshot.docs.length;
  console.log(snapshot.docs.length);
  // valueReport.push(snapshot.docs.length);
  myLineChart.data.datasets.forEach((dataset) => {
    dataset.data[9] = snapshot.docs.length * 10;
  });
  myLineChart.update();
})

var May = db.collection('transactions').where("time", ">=", new Date("November 01, 2020")).where("time", "<", new Date("November 30, 2020")).get().then((snapshot) => {
  // valueReport.May = snapshot.docs.length;
  console.log(snapshot.docs.length);
  // valueReport.push(snapshot.docs.length);
  myLineChart.data.datasets.forEach((dataset) => {
    dataset.data[10] = snapshot.docs.length * 10;
  });
  myLineChart.update();
})

var May = db.collection('transactions').where("time", ">=", new Date("December 01, 2020")).where("time", "<", new Date("December 31, 2020")).get().then((snapshot) => {
  // valueReport.May = snapshot.docs.length;
  console.log(snapshot.docs.length);
  // valueReport.push(snapshot.docs.length);
  myLineChart.data.datasets.forEach((dataset) => {
    dataset.data[11] = snapshot.docs.length * 10;
  });
  myLineChart.update();
})









// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Earnings",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return 'RM' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': RM' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});
