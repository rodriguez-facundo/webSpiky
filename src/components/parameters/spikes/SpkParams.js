// SpkParams.jsx
import React from "react";
import TextField from 'material-ui/TextField';

export default class SpkParams extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      resolution: props.values.resolution,
      minDsimultaneous: props.minDsimultaneous,
      ratioElimination: props.ratioElimination
    }
    this.handleResolutionChange = this.handleResolutionChange.bind(this);
    this.handleMinDsimultaneousChange = this.handleMinDsimultaneousChange.bind(this);
    this.handleRatioEliminationChange = this.handleRatioEliminationChange.bind(this);
  };
  
  handleResolutionChange(event) {
    this.props.onResolutionChange(event.target.value)
  }
  handleMinDsimultaneousChange(event) {
    this.props.onMinDsimultaneousChange(event.target.value)
  }
  handleRatioEliminationChange(event) {
    this.props.onRatioEliminationChange(event.target.value)
  }
  
  render () {
    var content = 
    <div>
      <TextField 
        name='params.spks.resolution'
        value={this.props.values.resolution}
        onChange={this.handleResolutionChange} 
        hintText="Resolution for interpolation"
        floatingLabelText="Resolution for interpolation"
      /><br />
      <TextField 
        name='params.spks.minDsimultaneous'
        value={this.props.values.minDsimultaneous}
        onChange={this.handleMinDsimultaneousChange} 
        hintText="Minimum distance"
        floatingLabelText="Min. distance between peaks"
      /><br />
      <TextField 
        name='params.spks.ratioElimination'
        value={this.props.values.ratioElimination}
        onChange={this.handleRatioEliminationChange} 
        hintText="Threshold for elimination"
        floatingLabelText="Threshold for elimination"
      />
    </ div>
      
    return (
      content
    );
    
  }
}
