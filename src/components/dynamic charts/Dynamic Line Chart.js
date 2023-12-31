import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 1000;

class DynamicLineChart extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
		this.timer = null;
	}
	componentDidMount() {
		if(this.timer == null)
			this.timer = setTimeout(this.updateChart, updateInterval);
	}
	updateChart() {
		if(this.chart) {
			fetch('https://blynk.cloud/external/api/get?token=GnSTVNjuUEBBkVaZdRPBqhkysSU10LQ1&V0')
				.then(response => response.json())
				.then(data => {
					yVal = Math.round(data);
					dps.push({x: xVal,y: yVal});
					xVal++;
					if (dps.length >  10 ) {
						dps.shift();
					}
					this.chart.render();
				})
				.catch(error => console.error(error));

			setTimeout(this.updateChart, updateInterval);
		}
	}
	render() {
		const options = {
			title :{
				text: "Temperature"
			},
			data: [{
				type: "line",
				dataPoints : dps
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default DynamicLineChart;