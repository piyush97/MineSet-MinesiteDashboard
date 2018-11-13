// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

// ##############################
// // // Daily Sales
// #############################

const dailySalesChart = {
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    series: [[12, 17, 7, 17, 23, 18, 38]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // AirQuality data
// #############################

// function shuffleArray(AirQuality) {
//   for (let i = AirQuality.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [AirQuality[i], AirQuality[j]] = [AirQuality[j], AirQuality[i]];
//   }
// }
// shuffleArray(AirQuality);

var AirQuality = {
  data: {
    labels: ["PM 10", "PM 2.5", "No2", "O3", "CO", "SO2", "NH3", "Pb"],
    series: [[20, 22, 35, 42, 0.29, 32, 128, 0.33]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 100,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 5,
            easing: "ease"
          }
        });
      }
    }
  }
};

const WaterQuality = {
  data: {
    labels: [
      "pH",
      "TDS",
      "Chloride",
      "Sulphate",
      "Nitrates",
      "Phloride",
      "Iron"
    ],
    series: [[6.8, 40.0, 52.7, 10.7, 28, 0.76, 68]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 100,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 10) * delays2,
            dur: durations2,
            from: 0,
            to: 2,
            easing: "ease"
          }
        });
      }
    }
  }
};
// ##############################
// // // Completed Tasks
// #############################

const completedTasksChart = {
  data: {
    labels: [
      "Location",
      "Temperature Day",
      "Temperature Night",
      "Relative Humidity Max",
      "Relative Humidity Min",
      "Wind Speed",
      "Rainfall",
      "No of Rainy Days"
    ],
    series: [["A", 38.5, 32.2, 300, 280, 240, 200, 190]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: -10
    }),
    low: 10,
    high: 320,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 12) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

const NoiseQuality = {
  data: {
    labels: ["Decible Morning", "Decible Evening", "Decible Night"],
    series: [[80, 75, 60]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 10
    }),
    low: 0,
    high: 100,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 8) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};


module.exports = {
  dailySalesChart,
  AirQuality,
  completedTasksChart,
  NoiseQuality,
  WaterQuality
};
