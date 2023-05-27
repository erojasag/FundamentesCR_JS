// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


// Bar Chart Example
let controlVenta = document.getElementById("charVentas");
let myBarChart = new Chart(controlVenta, {
  type: 'bar',
  data: {
    labels: ["5-7", "7-9", "9-11", "11-13","13-15","15-17", "17-18"],
    datasets: [{
      label: "Cantidad",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [6,10,13,17,11,15,10],
    }],
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
        maxBarThickness: 50,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          maxTicksLimit: 5
        }
      }],
    },
  }
});
