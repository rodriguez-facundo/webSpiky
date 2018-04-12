import React from 'react';
import Plotly from 'plotly.js/dist/plotly';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

var style = {
  line:{
    color : 'rgba(49,130,189, 1)',
    shape : 'spline',
    width : 0.5,
  },
};


export default class PlotRawData extends React.Component {

  constructor(props) {
    super(props)
  };

  render() {
    var sliderSteps = [];
    for (var i=0; i < 100; i++) {
      sliderSteps.push({
        method: 'update',
        label: i,
        args: [[i], {
          mode: 'immediate',
          transition: {duration: 300},
          frame: {duration: 300, redraw: true},
        }]
      });
    };

    var layout = {
      width: 1200,
      plot_bgcolor: '#FDFDFD',
      showlegend: false,
      xaxis: {
        showgrid: false,
        zeroline: false,
        showline:true,
        mirror: true,

      },
      yaxis: {
        showgrid: false,
        zeroline: false,
        showline:true,
        mirror: true
      },
      sliders: [{
        currentvalue: {
          visible: true,
          prefix: 'Seconds:',
          xanchor: 'center',
          font: {size: 20, color: '#666'},
        },
        steps: sliderSteps
      }],
    };
    var x = Array(this.props.values.length)
    for (var i=0; i<this.props.values.length; i++){
      x[i] = i/this.props.step
    }
    console.log(this.props.values)
    var data = [{
      x: x,
      y: this.props.values,
      mode: 'lines',
      line: style.line,
      hoverinfo: 'none',
    }];

    return (
      <Plot calssName='plot.rawData' data={data} layout={layout}/>
    );
  };
};