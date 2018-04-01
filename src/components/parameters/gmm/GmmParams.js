// GmmParams.jsx
import React from "react";
import TextField from 'material-ui/TextField';

export default class GmmParams extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleParamChange = this.handleParamChange.bind(this);
  };
  handleParamChange(event) {
    this.props.onParamChange(event.target.name, event.target.value);
  }

  render () {
    var content = 
    <div>
      <TextField 
        name='gaussians'
        value={this.props.values.gaussians}
        onChange={this.handleParamChange}
        hintText="Max. number of clusters"
        floatingLabelText="Max. number of clusters"
      />
      <br />
      <TextField 
        name='features'
        value={this.props.values.features}
        onChange={this.handleParamChange} 
        hintText="Max. number of features"
        floatingLabelText="Max. number of features"
      /><br />
      <TextField 
        name='correlation'
        value={this.props.values.correlation}
        onChange={this.handleParamChange} 
        hintText="Max. correlation between features"
        floatingLabelText="Máx. correlation between features"
      /><br />
      <TextField 
        name='initializations'
        value={this.props.values.initializations}
        onChange={this.handleParamChange}
        hintText="Number of initialization"
        floatingLabelText="Number of initializations"
      /><br />
    </ div>
      
    return (
      content
    );
    
  }
}
