var Emp_Countries = new Array();
var Emp_Datasets = new Array();

function loadChart() {
    var ctx = document.getElementById("lineChart").getContext("2d");
    window.myLine = new Chart(ctx, {
        type: 'scatter',
        showLine: true,
        data: {
            labels: Emp_Countries,
            datasets: Emp_Datasets,
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            },
            spanGaps: true,
            legend: {
                display: true,
                position: 'top',
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return tooltipItem.datasetIndex + ' (Age ' + tooltipItem.xLabel + ') : ' + tooltipItem.yLabel;
                    }
                }
            },
            title: {
                display: true,
                text: 'Employee by Country and Age'
            }
        }
    });
}

Emp_Countries = {
    "1": "Indonesia",
    "2": "United States",
    "3": "Australia",
    "4": "Japan",
    "6": "Netherland",
    "7": "Poland"
};

Emp_Datasets = {
      "Australia": {
        "label": "Australia",
        "fill": false,
        "spanGaps": true,
        "borderColor": "rgba(139, 78, 94, 0.73)",
        "pointBorderColor": "rgba(139, 78, 94, 0.73)",
        "pointBackgroundColor": "rgba(139, 78, 94, 0.73)",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgba(139, 78, 94, 0.73)",
        "data": [
          {
            "x": 18,
            "y": 1
          },
          {
            "x": 27,
            "y": 3
          },
          {
            "x": 34,
            "y": 2
          }
        ]
      },
      "Indonesia": {
        "label": "Indonesia",
        "fill": false,
        "spanGaps": true,
        "borderColor": "rgba(129, 135, 134, 0.73)",
        "pointBorderColor": "rgba(129, 135, 134, 0.73)",
        "pointBackgroundColor": "rgba(129, 135, 134, 0.73)",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgba(129, 135, 134, 0.73)",
        "data": [
          {
            "x": 17,
            "y": 1
          },
          {
            "x": 18,
            "y": 2
          },
          {
            "x": 19,
            "y": 5
          },
          {
            "x": 24,
            "y": 3
          },
          {
            "x": 26,
            "y": 5
          },
          {
            "x": 27,
            "y": 4
          },
          {
            "x": 28,
            "y": 2
          },
          {
            "x": 30,
            "y": 2
          }
        ]
      },
      "Japan": {
        "label": "Japan",
        "fill": false,
        "spanGaps": true,
        "borderColor": "rgba(193, 253, 144, 0.73)",
        "pointBorderColor": "rgba(193, 253, 144, 0.73)",
        "pointBackgroundColor": "rgba(193, 253, 144, 0.73)",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgba(193, 253, 144, 0.73)",
        "data": [
          {
            "x": 18,
            "y": 6
          },
          {
            "x": 23,
            "y": 2
          },
          {
            "x": 25,
            "y": 8
          },
          {
            "x": 29,
            "y": 4
          },
          {
            "x": 30,
            "y": 4
          },
          {
            "x": 34,
            "y": 4
          },
          {
            "x": 37,
            "y": 4
          },
          {
            "x": 41,
            "y": 4
          },
          {
            "x": 67,
            "y": 8
          },
          {
            "x": 69,
            "y": 4
          }
        ]
      },
      "Netherland": {
        "label": "Netherland",
        "fill": false,
        "spanGaps": true,
        "borderColor": "rgba(197, 235, 156, 0.73)",
        "pointBorderColor": "rgba(197, 235, 156, 0.73)",
        "pointBackgroundColor": "rgba(197, 235, 156, 0.73)",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgba(197, 235, 156, 0.73)",
        "data": [
          {
            "x": 21,
            "y": 2
          },
          {
            "x": 22,
            "y": 2
          },
          {
            "x": 25,
            "y": 2
          },
          {
            "x": 27,
            "y": 2
          },
          {
            "x": 32,
            "y": 4
          },
          {
            "x": 38,
            "y": 4
          }
        ]
      },
      "Poland": {
        "label": "Poland",
        "fill": false,
        "spanGaps": true,
        "borderColor": "rgba(56, 194, 229, 0.73)",
        "pointBorderColor": "rgba(56, 194, 229, 0.73)",
        "pointBackgroundColor": "rgba(56, 194, 229, 0.73)",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgba(56, 194, 229, 0.73)",
        "data": [
          {
            "x": 34,
            "y": 2
          },
          {
            "x": 44,
            "y": 2
          }
        ]
      },
      "United States": {
        "label": "United States",
        "fill": false,
        "spanGaps": true,
        "borderColor": "rgba(199, 2, 221, 0.73)",
        "pointBorderColor": "rgba(199, 2, 221, 0.73)",
        "pointBackgroundColor": "rgba(199, 2, 221, 0.73)",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgba(199, 2, 221, 0.73)",
        "data": [
          {
            "x": 23,
            "y": 2
          },
          {
            "x": 24,
            "y": 4
          },
          {
            "x": 52,
            "y": 2
          }
        ]
      }
};