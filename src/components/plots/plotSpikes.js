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

var layout = {
  plot_bgcolor: '#FDFDFD',
  showlegend: false,
  xaxis: {showgrid: false, zeroline: false, showline:true, mirror: true},
  yaxis: {showgrid: false, zeroline: false, showline:true, mirror: true},
};

export default class PlotSpikes extends React.Component {
  
  constructor(props) {
    super(props)
  };
  
  render() {

    var data = [];
    for ( var i = 0 ; i < this.props.values.x.length ; i++ ) {
      var result = {
        x: this.props.values.x[i],
        y: this.props.values.y[i],
        type: 'scatter',
        mode: 'lines',
        line: style.line,
        hoverinfo: 'none',
      };
      data.push(result);
    };
    
    return (
      <Plot calssName='plot.spikes' data={data} layout={layout} />
    );
  };
};