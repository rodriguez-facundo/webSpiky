import React from 'react';
import Plotly from 'plotly.js/dist/plotly';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

var style = {
  marker:{
    size: 15,
    opacity: 0.4,
    symbol: 'hexagon',
    line:{
      width: 1,
      color: 'black'
    }
  }
};


export default class PlotClusters extends React.Component {

  constructor(props) {
    super(props)
  };

  render() {
    var layout = {
      xaxis: {
        title: 'Direction '+this.props.values.directions[0],
        showgrid: false,
        zeroline: false,
        showline:true,
        mirror: true
      },
      yaxis: {
        title: 'Direction '+this.props.values.directions[1],
        showgrid: false,
        zeroline: false,
        showline:true,
        mirror: true}
    }


    var data = [];
    for ( var i = 0 ; i < this.props.values.x.length ; i++ ) {
      var result = {
        x: this.props.values.x[i],
        y: this.props.values.y[i],
        name: this.props.values.labels[i],
        type: 'scatter',
        mode: 'markers',
        marker: style.marker,

      };
      data.push(result);
    };



    return (
      <Plot calssName='plot.clusters' data={data} layout={layout}/>
    );
  };
};
