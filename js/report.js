
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

function weekGraph() {


}

function displayGraph() {
    var month = document.getElementById("monthValue").value;
    var year = document.getElementById("yearValueReport").value;
    var checkBox = document.getElementById("week").value;

    //var valueReport = { January: "", February: "", March: "", April: "", May: "", June: "", July: "", August: "", September: "", October: "", November: "", December: "" };
    //var valueReport = [];
    // console.log(year.value);
    // console.log(month.value);
    if (checkBox == "Week") {

        var vWeek1 = 0;
        var vWeek2 = 0
        var vWeek3 = 0;
        var vWeek4 = 0;

        if (month == "January") {
            db.collection('transactions').where("time", ">=", new Date("January 01," + year)).where("time", "<", new Date("January 07," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[0] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("January 08," + year)).where("time", "<", new Date("January 14," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[1] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("January 15," + year)).where("time", "<", new Date("January 21," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[2] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("January 22," + year)).where("time", "<", new Date("January 30," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[3] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: month + " " + year,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        //data: [valueReport.January, valueReport.February, valueReport.March, valueReport.April, valueReport.May, valueReport.June, valueReport.July, valueReport.August, valueReport.September, valueReport.October, valueReport.November, valueReport.December]
                        data: [vWeek1, vWeek2, vWeek3, vWeek4]
                    }]
                },

                // Configuration options go here
                options: {

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
                                return ': RM' + number_format(tooltipItem.yLabel);
                            }
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


                }
            });

        }

        if (month == "February") {
            console.log("february week");
            db.collection('transactions').where("time", ">=", new Date("February 01," + year)).where("time", "<", new Date("February 07," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[0] = snapshot.docs.length;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("February 08," + year)).where("time", "<", new Date("February 14," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[1] = snapshot.docs.length;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("February 15," + year)).where("time", "<", new Date("February 21," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[2] = snapshot.docs.length;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("February 22," + year)).where("time", "<", new Date("February 28," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[3] = snapshot.docs.length;
                });
                chart.update();
            })
            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: month + " " + year,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        //data: [valueReport.January, valueReport.February, valueReport.March, valueReport.April, valueReport.May, valueReport.June, valueReport.July, valueReport.August, valueReport.September, valueReport.October, valueReport.November, valueReport.December]
                        data: [vWeek1, vWeek2, vWeek3, vWeek4]
                    }]
                },

                // Configuration options go here
                options: {

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
                                return ': RM' + number_format(tooltipItem.yLabel);
                            }
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


                }
            });
        }
        if (month == "March") {
            console.log("March week");
            db.collection('transactions').where("time", ">=", new Date("March 01," + year)).where("time", "<", new Date("March 07," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[0] = snapshot.docs.length;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("March 08," + year)).where("time", "<", new Date("March 14," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[1] = snapshot.docs.length;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("March 15," + year)).where("time", "<", new Date("March 21," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[2] = snapshot.docs.length;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("March 22," + year)).where("time", "<", new Date("March 31," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[3] = snapshot.docs.length;
                });
                chart.update();
            })

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: month + " " + year,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        //data: [valueReport.January, valueReport.February, valueReport.March, valueReport.April, valueReport.May, valueReport.June, valueReport.July, valueReport.August, valueReport.September, valueReport.October, valueReport.November, valueReport.December]
                        data: [vWeek1, vWeek2, vWeek3, vWeek4]
                    }]
                },

                // Configuration options go here
                options: {

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
                                return ': RM' + number_format(tooltipItem.yLabel);
                            }
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


                }
            });

        }

        if (month == "April") {
            console.log("April week");
            db.collection('transactions').where("time", ">=", new Date("April 01," + year)).where("time", "<", new Date("April 07," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[0] = snapshot.docs.length;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("April 08," + year)).where("time", "<", new Date("April 14," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[1] = snapshot.docs.length;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("April 15," + year)).where("time", "<", new Date("April 21," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[2] = snapshot.docs.length;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("April 22," + year)).where("time", "<", new Date("April 30," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[3] = snapshot.docs.length;
                });
                chart.update();
            })

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: month + " " + year,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        //data: [valueReport.January, valueReport.February, valueReport.March, valueReport.April, valueReport.May, valueReport.June, valueReport.July, valueReport.August, valueReport.September, valueReport.October, valueReport.November, valueReport.December]
                        data: [vWeek1, vWeek2, vWeek3, vWeek4]
                    }]
                },

                // Configuration options go here
                options: {

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
                                return ': RM' + number_format(tooltipItem.yLabel);
                            }
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


                }
            });
        }

        if (month == "May") {
            console.log("May week");
            db.collection('transactions').where("time", ">=", new Date("May 01," + year)).where("time", "<", new Date("May 07," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[0] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("May 08," + year)).where("time", "<", new Date("May 14," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[1] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("May 15," + year)).where("time", "<", new Date("May 21," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[2] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("May 22," + year)).where("time", "<", new Date("May 31," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[3] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: month + " " + year,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        //data: [valueReport.January, valueReport.February, valueReport.March, valueReport.April, valueReport.May, valueReport.June, valueReport.July, valueReport.August, valueReport.September, valueReport.October, valueReport.November, valueReport.December]
                        data: [vWeek1, vWeek2, vWeek3, vWeek4]
                    }]
                },

                // Configuration options go here
                options: {

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
                                return ': RM' + number_format(tooltipItem.yLabel);
                            }
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


                }
            });

        }



        if (month == "June") {
            console.log("june");
            db.collection('transactions').where("time", ">=", new Date("June 01," + year)).where("time", "<", new Date("June 07," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[0] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("June 07," + year)).where("time", "<", new Date("June 14," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[1] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("June 14," + year)).where("time", "<", new Date("June 21," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[2] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("June 21," + year)).where("time", "<", new Date("June 30," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[3] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: month + " " + year,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        //data: [valueReport.January, valueReport.February, valueReport.March, valueReport.April, valueReport.May, valueReport.June, valueReport.July, valueReport.August, valueReport.September, valueReport.October, valueReport.November, valueReport.December]
                        data: [vWeek1, vWeek2, vWeek3, vWeek4]
                    }]
                },

                // Configuration options go here
                options: {

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
                                return ': RM' + number_format(tooltipItem.yLabel);
                            }
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


                }
            });

        }
        if (month == "July") {
            console.log("July week");
            db.collection('transactions').where("time", ">=", new Date("July 01," + year)).where("time", "<=", new Date("July 07," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[0] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("July 07," + year)).where("time", "<=", new Date("July 14," + year)).get().then((snapshot) => {
                console.log(snapshot.docs.length);
                chart.data.datasets.forEach((dataset) => {
                    dataset.data[1] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("July 14," + year)).where("time", "<=", new Date("July 21," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[2] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("July 21," + year)).where("time", "<=", new Date("July 30," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[3] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: month + " " + year,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        //data: [valueReport.January, valueReport.February, valueReport.March, valueReport.April, valueReport.May, valueReport.June, valueReport.July, valueReport.August, valueReport.September, valueReport.October, valueReport.November, valueReport.December]
                        data: [vWeek1, vWeek2, vWeek3, vWeek4]
                    }]
                },

                // Configuration options go here
                options: {

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
                                return ': RM' + number_format(tooltipItem.yLabel);
                            }
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


                }
            });

        }
        if (month == "August") {
            console.log("August");
            db.collection('transactions').where("time", ">=", new Date("August 01," + year)).where("time", "<", new Date("August 07," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[0] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("August 08," + year)).where("time", "<", new Date("August 14," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[1] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("August 15," + year)).where("time", "<", new Date("August 21," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[2] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("August 22," + year)).where("time", "<", new Date("August 31," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[3] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: month + " " + year,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        //data: [valueReport.January, valueReport.February, valueReport.March, valueReport.April, valueReport.May, valueReport.June, valueReport.July, valueReport.August, valueReport.September, valueReport.October, valueReport.November, valueReport.December]
                        data: [vWeek1, vWeek2, vWeek3, vWeek4]
                    }]
                },

                // Configuration options go here
                options: {

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
                                return ': RM' + number_format(tooltipItem.yLabel);
                            }
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


                }
            });

        }
        if (month == "September") {
            console.log("September week");
            db.collection('transactions').where("time", ">=", new Date("September 01," + year)).where("time", "<", new Date("September 07," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[0] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("September 08," + year)).where("time", "<", new Date("September 14," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[1] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("September 15," + year)).where("time", "<", new Date("September 21," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[2] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("September 22," + year)).where("time", "<", new Date("September 30," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[3] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: month + " " + year,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        //data: [valueReport.January, valueReport.February, valueReport.March, valueReport.April, valueReport.May, valueReport.June, valueReport.July, valueReport.August, valueReport.September, valueReport.October, valueReport.November, valueReport.December]
                        data: [vWeek1, vWeek2, vWeek3, vWeek4]
                    }]
                },

                // Configuration options go here
                options: {

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
                                return ': RM' + number_format(tooltipItem.yLabel);
                            }
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


                }
            });

        }

        if (month == "October") {
            console.log("October week");
            db.collection('transactions').where("time", ">=", new Date("October 01," + year)).where("time", "<", new Date("October 07," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[0] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("October 08," + year)).where("time", "<", new Date("October 14," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[1] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("October 15," + year)).where("time", "<", new Date("October 21," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[2] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("October 22," + year)).where("time", "<", new Date("October 31," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[3] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: month + " " + year,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        //data: [valueReport.January, valueReport.February, valueReport.March, valueReport.April, valueReport.May, valueReport.June, valueReport.July, valueReport.August, valueReport.September, valueReport.October, valueReport.November, valueReport.December]
                        data: [vWeek1, vWeek2, vWeek3, vWeek4]
                    }]
                },

                // Configuration options go here
                options: {

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
                                return ': RM' + number_format(tooltipItem.yLabel);
                            }
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


                }
            });

        }

        if (month == "November") {
            console.log("November week");
            db.collection('transactions').where("time", ">=", new Date("November 01," + year)).where("time", "<", new Date("November 07," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[0] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("November 08," + year)).where("time", "<", new Date("November 14," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[1] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("November 15," + year)).where("time", "<", new Date("November 21," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[2] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("November 22," + year)).where("time", "<", new Date("November 30," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[3] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: month + " " + year,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        //data: [valueReport.January, valueReport.February, valueReport.March, valueReport.April, valueReport.May, valueReport.June, valueReport.July, valueReport.August, valueReport.September, valueReport.October, valueReport.November, valueReport.December]
                        data: [vWeek1, vWeek2, vWeek3, vWeek4]
                    }]
                },

                // Configuration options go here
                options: {

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
                                return ': RM' + number_format(tooltipItem.yLabel);
                            }
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


                }
            });
        }

        if (month == "December") {
            console.log("December week");
            db.collection('transactions').where("time", ">=", new Date("December 01," + year)).where("time", "<", new Date("December 07," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[0] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("December 08," + year)).where("time", "<", new Date("December 14," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[1] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("December 15," + year)).where("time", "<", new Date("December 21," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[2] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            db.collection('transactions').where("time", ">=", new Date("December 22," + year)).where("time", "<", new Date("December 31," + year)).get().then((snapshot) => {

                chart.data.datasets.forEach((dataset) => {
                    dataset.data[3] = snapshot.docs.length * 10;
                });
                chart.update();
            })

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: month + " " + year,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        //data: [valueReport.January, valueReport.February, valueReport.March, valueReport.April, valueReport.May, valueReport.June, valueReport.July, valueReport.August, valueReport.September, valueReport.October, valueReport.November, valueReport.December]
                        data: [vWeek1, vWeek2, vWeek3, vWeek4]
                    }]
                },

                // Configuration options go here
                options: {

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
                                return ': RM' + number_format(tooltipItem.yLabel);
                            }
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


                }
            });

        }







    }
    if (month == "All") {


        var january = db.collection('transactions').where("time", ">=", new Date("January 01," + year)).where("time", "<", new Date("January 31," + year)).get().then((snapshot) => {
            // snapshot.docs.forEach(doc => {
            //     // console.log(doc.data());
            //     // //renderTransactions(doc);
            //     // //renderCafe(doc);

            // });


            // valueReport.January = snapshot.docs.length;
            // console.log(valueReport.January);
            // valueReport.push(snapshot.docs.length);
            chart.data.datasets.forEach((dataset) => {
                dataset.data[0] = snapshot.docs.length * 10;
            });
            chart.update();
        })
        var february = db.collection('transactions').where("time", ">=", new Date("February 01," + year)).where("time", "<", new Date("February 28," + year)).get().then((snapshot) => {
            // valueReport.February = snapshot.docs.length;
            // console.log(valueReport.February);
            // valueReport.push(snapshot.docs.length);
            chart.data.datasets.forEach((dataset) => {
                dataset.data[1] = snapshot.docs.length * 10;
            });
            chart.update();
        })
        var March = db.collection('transactions').where("time", ">=", new Date("March 01," + year)).where("time", "<", new Date("March 31," + year)).get().then((snapshot) => {
            // valueReport.March = snapshot.docs.length;
            // console.log(valueReport.March);
            // valueReport.push(snapshot.docs.length);
            chart.data.datasets.forEach((dataset) => {
                dataset.data[2] = snapshot.docs.length * 10;
            });
            chart.update();
        })
        var April = db.collection('transactions').where("time", ">=", new Date("April 01," + year)).where("time", "<", new Date("April 30," + year)).get().then((snapshot) => {
            // valueReport.April = snapshot.docs.length;
            // console.log(valueReport.April);
            // valueReport.push(snapshot.docs.length);

            chart.data.datasets.forEach((dataset) => {
                dataset.data[3] = snapshot.docs.length * 10;
            });
            chart.update();
        })
        var May = db.collection('transactions').where("time", ">=", new Date("May 01," + year)).where("time", "<", new Date("May 31," + year)).get().then((snapshot) => {
            // valueReport.May = snapshot.docs.length;
            // console.log(valueReport.May);
            // valueReport.push(snapshot.docs.length);
            chart.data.datasets.forEach((dataset) => {
                dataset.data[4] = snapshot.docs.length * 10;
            });
            chart.update();
        })
        var valueJune = 0;
        db.collection('transactions').where("time", ">=", new Date("June 01," + year)).where("time", "<", new Date("June 31," + year)).get().then((snapshot) => {
            chart.data.datasets.forEach((dataset) => {
                dataset.data[5] = snapshot.docs.length * 10;
            });
            chart.update();
        })


        var july = db.collection('transactions').where("time", ">=", new Date("July 01," + year)).where("time", "<", new Date("July 30," + year)).get().then((snapshot) => {
            // valueReport.July = snapshot.docs.length;
            // console.log(valueReport.July);
            //valueReport.push(snapshot.docs.length);
            chart.data.datasets.forEach((dataset) => {
                dataset.data[6] = snapshot.docs.length * 10;
            });
            chart.update();
        })


        var august = db.collection('transactions').where("time", ">=", new Date("August 01," + year)).where("time", "<", new Date("August 31," + year)).get().then((snapshot) => {
            // valueReport.August = snapshot.docs.length;
            // console.log(valueReport.August);
            // valueReport.push(snapshot.docs.length);
            chart.data.datasets.forEach((dataset) => {
                dataset.data[7] = snapshot.docs.length * 10;
            });
            chart.update();
        })
        var september = db.collection('transactions').where("time", ">=", new Date("September 01," + year)).where("time", "<", new Date("September 30," + year)).get().then((snapshot) => {
            // valueReport.September = snapshot.docs.length;
            // console.log(valueReport.September);
            //valueReport.push(snapshot.docs.length);
            chart.data.datasets.forEach((dataset) => {
                dataset.data[8] = snapshot.docs.length * 10;
            });
            chart.update();
        })
        var october = db.collection('transactions').where("time", ">=", new Date("October 01," + year)).where("time", "<", new Date("October 31," + year)).get().then((snapshot) => {
            // valueReport.October = snapshot.docs.length;
            // console.log(valueReport.October);
            //valueReport.push(snapshot.docs.length);
            chart.data.datasets.forEach((dataset) => {
                dataset.data[9] = snapshot.docs.length * 10;
            });
            chart.update();
        })
        var november = db.collection('transactions').where("time", ">=", new Date("November 01," + year)).where("time", "<", new Date("November 30," + year)).get().then((snapshot) => {
            // valueReport.November = snapshot.docs.length;
            // console.log(valueReport.November);
            //valueReport.push(snapshot.docs.length);\\
            chart.data.datasets.forEach((dataset) => {
                dataset.data[10] = snapshot.docs.length * 10;
            });
            chart.update();
        })

        var December = db.collection('transactions').where("time", ">=", new Date("December 01," + year)).where("time", "<", new Date("December 30," + year)).get().then((snapshot) => {
            // valueReport.December = snapshot.docs.length;
            // console.log(valueReport.December);
            //valueReport.push(snapshot.docs.length);
            chart.data.datasets.forEach((dataset) => {
                dataset.data[11] = snapshot.docs.length * 10;
            });
            chart.update();
        })

        var vJanuary = 0;
        var vFebruary = 0
        var vMarch = 0;
        var vApril = 0;
        var vMay = 0;
        var vJune = 0
        var vJuly = 0;
        var vAugust = 0;
        var vSeptember = 0;
        var vOctober = 0;
        var vNovember = 0;
        var vDecember = 0;

        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: "Earning " + year,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    //data: [valueReport.January, valueReport.February, valueReport.March, valueReport.April, valueReport.May, valueReport.June, valueReport.July, valueReport.August, valueReport.September, valueReport.October, valueReport.November, valueReport.December]
                    data: [vJanuary, vFebruary, vMarch, vApril, vMay, vJune, vJuly, vAugust, vSeptember, vOctober, vNovember, vDecember]
                }]
            },

            // Configuration options go here
            options: {
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
                            return ': RM' + number_format(tooltipItem.yLabel);
                        }
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

            }
        }


        );


    }




}
