// Params.jsx
import React from "react";
import PksParams from './peaks/PksParams';
import SpkParams from './spikes/SpkParams';
import WltParams from './wavelets/WltParams';
import GmmParams from './gmm/GmmParams';
import BlurParams from './blur/BlurParams';
import FilterParams from './filter/FilterParams';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export default class Params extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      
      order: '',
      rate: '',
      low: '',
      high: '',
      
      threshold: '',
      way: '',
      minD: '',
      before: '',
      after: '',
      
      resolution: '',
      minDsimultaneous: '',
      ratioElimination: '',
      
      wLvl: '',
      wFunc: '',
      wMode: '',
      
      gaussians : '',
      features: '',
      correlation: '',
      initializations: '',
      
      alpha: '',
    };
    
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleLowChange = this.handleLowChange.bind(this);
    this.handleHighChange = this.handleHighChange.bind(this);
    
    this.handleThresholdChange = this.handleThresholdChange.bind(this);
    this.handleWayChange = this.handleWayChange.bind(this);
    this.handleMinDChange = this.handleMinDChange.bind(this);
    this.handleBeforeChange = this.handleBeforeChange.bind(this);
    this.handleAfterChange = this.handleAfterChange.bind(this);
    
    this.handleGaussiansChange = this.handleGaussiansChange.bind(this);
    this.handleFeaturesChange = this.handleFeaturesChange.bind(this);
    this.handleCorrelationChange = this.handleCorrelationChange.bind(this);
    this.handleInitializationsChange = this.handleInitializationsChange.bind(this);
    
    this.handleWLvlChange = this.handleWLvlChange.bind(this);
    this.handleWFuncChange = this.handleWFuncChange.bind(this);
    this.handleWModeChange = this.handleWModeChange.bind(this);
    
    this.handleResolutionChange = this.handleResolutionChange.bind(this);
    this.handleMinDsimultaneousChange = this.handleMinDsimultaneousChange.bind(this);
    this.handleRatioEliminationChange = this.handleRatioEliminationChange.bind(this);
    
    this.handleAlphaChange = this.handleAlphaChange.bind(this);
    
  };
  
  
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded})
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };
  
  handleOrderChange(value) {
    this.setState({order: value});
  };
  handleRateChange(value) {
    this.setState({rate: value});
  };
  handleLowChange(value) {
    this.setState({low: value});
  };
  handleHighChange(value) {
    this.setState({high: value});
  };
  
  handleThresholdChange(value) {
    this.setState({threshold: value});
  }
  handleWayChange(value) {
    this.setState({way: value});
  }
  handleMinDChange(value) {
    this.setState({minD: value});
  }
  handleBeforeChange(value) {
    this.setState({before: value});
  }
  handleAfterChange(value) {
    this.setState({after: value});
  }
  
  handleGaussiansChange(value) {
    this.setState({gaussians: value});
  };
  handleFeaturesChange(value) {
    this.setState({features: value});
  };
  handleCorrelationChange(value) {
    this.setState({correlation: value});
  };
  handleInitializationsChange(value) {
    this.setState({initilaizations: value});
  };
  
  handleWLvlChange(value){
    this.setState({wLvl: value});
  };
  handleWFuncChange(value){
    this.setState({wFunc: value});
  };
  handleWModeChange(value){
    this.setState({wMode: value});
  };
  
  handleResolutionChange(value){
    this.setState({resolution: value});
  };
  handleMinDsimultaneousChange(value){
    this.setState({minDsimultaneous: value});
  };
  handleRatioEliminationChange(value){
    this.setState({ratioElimination: value});
  };
  
  handleAlphaChange(value){
    this.setState({alpha: value});
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
                values={this.state}
                onOrderChange={this.handleOrderChange}
                onRateChange={this.handleRateChange}
                onLowChange={this.handleLowChange}
                onHighChange={this.handleHighChange}
              />
            </CardText>
          </Card>
          <Card name='peaks.card'>
            <CardHeader name='peaks.cardHeader'
              title="Peak Detection"
              subtitle="Define parameters related to peak detection and spike extraction"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText name='peaks.cardText' expandable={true}>
              <PksParams
                values={this.state}
                onThresholdChange={this.handleThresholdChange}
                onWayChange={this.handleWayChange}
                onMinDChange={this.handleMinDChange}
                onBeforeChange={this.handleBeforeChange}
                onAfterChange={this.handleAfterChange}
              />
            </CardText>
          </Card>
          <Card name='spike.card'>
            <CardHeader name='spike.cardHeader'
              title="Spike Alignment"
              subtitle="Define parameters for elimination in case of simultaneous firings"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText name='spike.cardText' expandable={true}>
              <SpkParams 
                values={this.state}
                onResolutionChange={this.handleResolutionChange}
                onMinDsimultaneousChange={this.handleMinDsimultaneousChange}
                onRatioEliminationChange={this.handleRatioEliminationChange}
              />
            </CardText>
          </Card>
          <Card name='wavelet.card'>
            <CardHeader name='wavelet.cardHeader'
              title="Wavelet Decomposition"
              subtitle="Define parameters for wavelet decomposition"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText name='wavelet.cardText' expandable={true}>
              <WltParams
                values={this.state}
                onWLvlChange={this.handleWLvlChange}
                onWFuncChange={this.handleWFuncChange}
                onWModeChange={this.handleWModeChange}
              />
            </CardText>
          </Card>
          <Card name='gmm.card'>
            <CardHeader name='gmm.cardHeader'
              title="Gaussian Mixture Model"
              subtitle="Define parameters related to clustering"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText name='gmm.cardText' expandable={true}>
              <GmmParams 
                values={this.state}
                onGaussiansChange={this.handleGaussiansChange}
                onFeaturesChange={this.handleFeaturesChange}
                onCorrelationChange={this.handleCorrelationChange}
                onInitializationsChange={this.handleInitializationsChange}
              />
            </CardText>
          </Card>
          <Card name='blur.card'>
            <CardHeader name='blur.cardHeader'
              title="Results blurring"
              subtitle="Define parameters related to result bluring"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <BlurParams
                name='params.blur.alpha'
                alpha={this.state.alpha}
                onAlphaChange={this.handleAlphaChange}
              />
            </CardText>
          </Card>
        </CardText>
        <CardActions>
          <RaisedButton label="Import" onClick={this.handleExpand} />
        </CardActions>
      </ Card>
      
    return (
      content
    );  
  }
}
