import React from 'react';
import Plotly from 'plotly.js/dist/plotly';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);


export default class PlotClusters extends React.Component {
  
  constructor(props) {
    super(props)
  };
  
  render() {
    var data = [
      {
        x: this.props.values.x,
        y: this.props.values.y,
        type: 'scatter',
        marker: { color: 'rgb(16, 32, 77)'}
      }
    ];
    var layout = {title: 'Clusters'};
    return (
      <Plot calssName='plot.clusters' data={data} layout={layout}/>
    );
  };
};
