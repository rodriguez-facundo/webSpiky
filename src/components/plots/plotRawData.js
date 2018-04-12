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
    var x = Array(50000)
    var y = Array(50000)
    for (var i=0; i<50000; i++){
      x[i] = i/this.props.step;
      y[i] = this.props.values[i];
    }
    var data = [{
      x: x,
      y: y,
      mode: 'lines',
      line: style.line,
      hoverinfo: 'none',
    }];

    return (
      <div align="center">
        <Plot calssName='plot.rawData' data={data} layout={layout}/>
      </div>
    );
  };
};
