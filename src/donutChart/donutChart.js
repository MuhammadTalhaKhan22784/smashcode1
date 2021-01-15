import React, {Component} from 'react';

import CanvasJSReact from '../assets/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DonutChart extends Component {
	render(){
		const options = {

			height: '300',

			animationEnabled: true,
        title:{
          // text: "Email Categories",
          // horizontalAlign: "left"
        },
        data: [{
          type: "doughnut",
          startAngle: 60,
          //innerRadius: 60,
          indexLabelFontSize: 12,
          indexLabel: "{label} - #percent%",
          toolTipContent: "<b>{label}:</b> {y} (#percent%)",
          dataPoints: [
            { y: 45, label: "Europe" },
            { y: 22, label: "North America" },
            { y: 18, label: "South America" },
            { y: 15, label: "Asia"}
          ]
        }]

		}
		return (
			<>
			{/*<div className="col-12 col-md-10" id="chartContainer"></div>*/}
			<div className="col-12 col-md-5">
        		<CanvasJSChart options = {options}
            		/* onRef = {ref => this.chart = ref} */
        		/>
      		</div>
      </>
		);
	}
}

export default DonutChart;