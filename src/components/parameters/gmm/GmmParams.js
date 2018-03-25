// GmmParams.jsx
import React from "react";
import TextField from 'material-ui/TextField';

export default class GmmParams extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      gaussians : props.values.gaussians,
      features : props.values.features,
      correlation : props.values.correlation,
      initializations : props.values.initiaization
    };
    this.handleGaussiansChange = this.handleGaussiansChange.bind(this);
    this.handleFeaturesChange = this.handleFeaturesChange.bind(this);
    this.handleCorrelationChange = this.handleCorrelationChange.bind(this);
    this.handleInitializationsChange = this.handleInitializationsChange.bind(this);
  };
  handleGaussiansChange(event) {
    this.props.onGaussiansChange(event.target.value);
  }
  handleFeaturesChange(event) {
    this.props.onFeaturesChange(event.target.value);
  }
  handleCorrelationChange(event) {
    this.props.onCorrelationChange(event.target.value);
  }
  handleInitializationsChange(event) {
    this.props.onInitializationsChange(event.target.value);
  }
  render () {
    var content = 
    <div>
      <TextField 
        name='params.gmm.gaussians'
        value={this.props.values.gaussians}
        onChange={this.handleGaussiansChange}
        hintText="Max. number of clusters"
        floatingLabelText="Max. number of clusters"
      />
      <br />
      <TextField 
        name='params.gmm.features'
        value={this.props.values.features}
        onChange={this.handleFeaturesChange} 
        hintText="Max. number of features"
        floatingLabelText="Max. number of features"
      /><br />
      <TextField 
        name='params.gmm.correlation'
        value={this.props.values.correlation}
        onChange={this.handleCorrelationChange} 
        hintText="Max. correlation between features"
        floatingLabelText="Máx. correlation between features"
      /><br />
      <TextField 
        name='params.gmm.initializations'
        value={this.props.values.initializations}
        onChange={this.handleInitializationsChange}
        hintText="Number of initialization"
        floatingLabelText="Number of initializations"
      /><br />
    </ div>
      
    return (
      content
    );
    
  }
}
