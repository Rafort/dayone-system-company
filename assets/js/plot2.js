
//bar chart
var ctx = document.getElementById( "barChart1" );
	ctx.height = 150;


var options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [ {
					ticks: {
						beginAtZero: false
					}
                                } ],
    y: {
      ticks: {
						beginAtZero: true
					},
      stacked: true,
      grid: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
      
    },
    x: {
      grid: {
        display: true
      }
    }
  }
};

new Chart('barChart1', {
  type: 'bar',
  options: options,
  data: {
			labels: [ "01/nov", "02/nov", "03/nov", "04/nov", "05/nov", "06/nov", "07/nov" ],
			datasets: [
				{
					label: "Facebook",
					data: [ 35, 39, 30, 36, 26, 25, 30 ],
					borderColor: "rgba(0, 123, 255, 0.9)",
					borderWidth: "0",
					backgroundColor: "rgba(0, 123, 255, 0.5)"
                            },

				{
    					label: "WhatsApp",
					data: [ 41, 45, 42, 51, 39, 37, 40 ],
					borderColor: "rgba(46, 184, 67, 0.9)",
					borderWidth: "0",
					backgroundColor: "rgba(46, 184, 67, 0.5)"
                            },
				{
					label: "Instagram",
					data: [ 28, 38, 30, 19, 28, 27, 37 ],
					borderColor: "rgba(120, 52, 104, 0.9)",
					borderWidth: "0",
					backgroundColor: "rgba(120, 52, 104, 0.5)"
                            },
{
    					label: "Outros",
					data: [ 31, 22, 14, 18, 13, 21, 15 ],
					borderColor: "rgba(110, 110, 110, 0.9)",
					borderWidth: "0",
					backgroundColor: "rgba(110, 110, 110, 0.5)"
                            }
                        ]
		},
		options: {
			scales: {
				yAxes: [ {
					ticks: {
						beginAtZero: true
					}
                                } ]
			}
		}
	} );


// Get the HTML canvas by its id 
plots = document.getElementById("pies");
// Example datasets for X and Y-axes 
var months = ["Comercial", "Administrativo", "Operação", "Logística"]; //Stays on the X-axis 
var traffic = [45, 39, 20, 21] //Stays on the Y-axis 
// Create an instance of Chart object:
new Chart(plots, {
 type: 'pie', //Declare the chart type
 data: {
 labels: months, //Defines each segment
 datasets: [{
 data: traffic, //Determines segment size
 //Color of each segment
 backgroundColor: [
 "rgb(240, 5, 252)",
 "rgb(252, 5, 79)",
 "rgb(0,12,255)",
 "rgb(21, 227, 235)"],
 }]
 },
 options:{
 legend: {display: true}, //This is true by default.
 
 }
 
});

