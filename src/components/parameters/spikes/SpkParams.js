// SpkParams.jsx
import React from "react";
import TextField from 'material-ui/TextField';

export default class SpkParams extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleParamChange = this.handleParamChange.bind(this);
  };
  handleParamChange(event) {
    this.props.onParamChange(event.target.name, event.target.value);
  };

  render () {
    var content = 
    <div>
      <TextField 
        name='resolution'
        value={this.props.values.resolution}
        onChange={this.handleParamChange} 
        hintText="Resolution for interpolation"
        floatingLabelText="Resolution for interpolation"
      /><br />
      <TextField 
        name='minDsimultaneous'
        value={this.props.values.minDsimultaneous}
        onChange={this.handleParamChange}
        hintText="Minimum distance"
        floatingLabelText="Min. distance between peaks"
      /><br />
      <TextField 
        name='ratioElimination'
        value={this.props.values.ratioElimination}
        onChange={this.handleParamChange}
        hintText="Threshold for elimination"
        floatingLabelText="Threshold for elimination"
      />
    </ div>
      
    return (
      content
    );
    
  }
}
