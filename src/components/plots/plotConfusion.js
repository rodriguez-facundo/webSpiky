import React from 'react';
import Plotly from 'plotly.js/dist/plotly';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

export default class PlotConfusion extends React.Component {
  
  constructor(props) {
    super(props)
  };
  
  render() {
    
    var layout = {
      width: 100*this.props.values.x.length,
      height: 100*this.props.values.y.length,
      plot_bgcolor: '#212121',
      xaxis: {
        side: 'top',
        title: 'Original Data',
        showgrid: false,
        showline: true, 
        mirror: false
      },
      yaxis: {
        title: 'Blurred Data',
        showgrid: false,
        showline: true, 
        mirror: false
      },

    };
    var data = [
      {
        z: this.props.values.z,
        x: this.props.values.x,
        y: this.props.values.y,
        type: 'heatmap',
        colorscale: [[0, '#ffffff'], [1, '#2196F3']],
        hoverinfo: 'z',
        xgap: 1,
        ygap: 1,
        opacity: 0.97,
      }
    ];
    
    return (
      <Plot calssName='plot.confusion' data={data} layout={layout}/>
    );
  };
};
