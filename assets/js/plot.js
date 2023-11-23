
// single bar chart
	var ctx = document.getElementById( "plots" );
	ctx.height = 120;
        ctx.width = 330;
	var myChart = new Chart( ctx, {
		type: 'bar',
		data: {
			labels: [ "Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom" ],
			datasets: [
				{
					label: "Minutos",
					data: [ 22, 35, 32, 28, 25, 11, 0 ],
					borderColor: "rgba(0, 123, 255, 0.9)",
					borderWidth: "0",
					backgroundColor: "rgba(0, 123, 255, 0.5)"
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




