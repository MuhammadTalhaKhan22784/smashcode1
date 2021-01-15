import React, {Component} from 'react';

import CanvasJSReact from '../assets/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineChart extends Component {
	render(){
		const options = {

			height: '198',

			theme: "light2", // "light1", "light2", "dark1", "dark2"
	        animationEnabled: true,
	        title:{
	          // text: "Share Value - 2016"   
	        },
	        axisX: {
	          interval: 1,
	          intervalType: "month",
	          valueFormatString: "MMM"
	        },
	        axisY:{
	          // title: "Price (in USD)",
	          includeZero: true,
	          valueFormatString: "$#0"
	        },
	        data: [{        
	          type: "line",
	          markerSize: 12,
	          xValueFormatString: "MMM, YYYY",
	          yValueFormatString: "$###.#",
	          dataPoints: [        
	            { label: 'Jan', y: 61 },
	            { label: 'Feb', y: 71 },
	            { label: 'Mar' , y: 55 },
	            { label: 'Apr' , y: 50 },
	            { label: 'May' , y: 65 },
	            { label: 'Jun' , y: 85 },
	            { label: 'Jul' , y: 68 },
	            { label: 'Aug' , y: 28 },
	            { label: 'Sep' , y: 34 },
	            { label: 'Oct' , y: 24 },
	            { label: 'Nov' , y: 44 },
	            { label: 'Dec' , y: 34 }
	          ]
	        },
	        {        
	          type: "line",
	          markerSize: 12,
	          xValueFormatString: "MMM, YYYY",
	          yValueFormatString: "$###.#",
	          dataPoints: [        
	            { label: 'Jan', y: 12 },
	            { label: 'Feb', y: 51 },
	            { label: 'Mar' , y: 15 },
	            { label: 'Apr' , y: 20 },
	            { label: 'May' , y: 35 },
	            { label: 'Jun' , y: 95 },
	            { label: 'Jul' , y: 18 },
	            { label: 'Aug' , y: 8 },
	            { label: 'Sep' , y: 4 },
	            { label: 'Oct' , y: 84 },
	            { label: 'Nov' , y: 94 },
	            { label: 'Dec' , y: 22 }
	          ]
	        }
	        ]

		}
		return (
			<>
			{/*<div className="col-12 col-md-10" id="chartContainer"></div>*/}
			<div className="col-12 col-md-10">
        		<CanvasJSChart options = {options}
            		/* onRef = {ref => this.chart = ref} */
        		/>
      		</div>
      </>
		);
	}
}

export default LineChart;