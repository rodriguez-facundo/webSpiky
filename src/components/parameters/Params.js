// Params.jsx
import React from "react";
import PksParams from './peaks/PksParams';
import SpkParams from './spikes/SpkParams';
import WltParams from './wavelets/WltParams';
import GmmParams from './gmm/GmmParams';
import BlurParams from './blur/BlurParams';
import FilterParams from './filter/FilterParams';
import ImportParams from '../import/importParams'

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export default class Params extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  };
  
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };
  
  render () {
    var content = 
      <Card name='main.card'
        expanded={this.state.expanded} 
        onExpandChange={this.handleExpandChange} 
      >
        <CardHeader name='main.cardHeader'
          title="Parameters"
          subtitle="Define the required parameters to find and classificate spikes"
          actAsExpander={true}
          showExpandableButton={true}
        >
        </CardHeader>
        <CardText name='main.cardText' expandable={true}>
          <Card name='filter.card'>
            <CardHeader name='filter.card.header'
              title="Signal Filtering"
              subtitle="Define parameters related to raw signal filtering"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText name='filter.cardText' expandable={true}>
              <FilterParams 
                name = "filter_params"
                values={this.props.params}
                onParamChange={this.props.onParamChange}
              />
            </CardText>
          </Card>
          <Card name='peaks.card' >
            <CardHeader name='peaks.cardHeader'
              title="Peak Detection"
              subtitle="Define parameters related to peak detection and spike extraction"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText name='peaks.cardText' expandable={true}>
              <PksParams
                values={this.props.params}
                onParamChange={this.props.onParamChange}
                onParamWayChange={this.props.onParamWayChange}
              />
            </CardText>
          </Card>
          <Card name='spike.card' >
            <CardHeader name='spike.cardHeader'
              title="Spike Alignment"
              subtitle="Define parameters for elimination in case of simultaneous firings"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText name='spike.cardText' expandable={true}>
              <SpkParams 
                values={this.props.params}
                onParamChange={this.props.onParamChange}
              />
            </CardText>
          </Card>
          <Card name='wavelet.card' >
            <CardHeader name='wavelet.cardHeader'
              title="Wavelet Decomposition"
              subtitle="Define parameters for wavelet decomposition"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText name='wavelet.cardText' expandable={true}>
              <WltParams
                values={this.props.params}
                onParamChange={this.props.onParamChange}
                onParamWFuncChange={this.props.onParamWFuncChange}
                onParamWModeChange={this.props.onParamWModeChange}
              />
            </CardText>
          </Card>
          <Card name='gmm.card'  >
            <CardHeader name='gmm.cardHeader'
              title="Gaussian Mixture Model"
              subtitle="Define parameters related to clustering"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText name='gmm.cardText' expandable={true}>
              <GmmParams 
                values={this.props.params}
                onParamChange={this.props.onParamChange}
              />
            </CardText>
          </Card>
          <Card name='blur.card'  >
            <CardHeader name='blur.cardHeader'
              title="Results blurring"
              subtitle="Define parameters related to result bluring"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <BlurParams
                name='params.blur.alpha'
                values={this.props.params}
                onParamChange={this.props.onParamChange}
              />
            </CardText>
          </Card>
        </CardText>
        <CardActions>
          <div align='center'>
            <ImportParams 
              onImportParams={this.props.onImportParams}
              buttonLabel={this.props.buttonLabel}
              />
          </div>  
        </CardActions>
      </ Card>
      
    return (
      content
    );  
  }
}
