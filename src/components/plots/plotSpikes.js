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

export default class PlotSpikes extends React.Component {

  constructor(props) {
    super(props)
  };

  render() {
    var layout = {
      title: 'Label '+this.props.title,
      plot_bgcolor: '#FDFDFD',
      showlegend: false,
      xaxis: {showgrid: false, zeroline: false, showline:true, mirror: true},
      yaxis: {showgrid: false, zeroline: false, showline:true, mirror: true},
    };

    var x = Array(this.props.values[0].length)
    for (var i=0;i<this.props.values[0].length;i++) {
      x[i] = i;
    };
    var data = [];
    for ( var i = 0 ; i < this.props.values.length ; i++ ) {
      var result = {
        x: x,
        y: this.props.values[i],
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
