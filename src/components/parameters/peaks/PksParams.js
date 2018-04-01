// PksParams.jsx
import React from "react";
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

export default class PksParams extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.handleParamChange = this.handleParamChange.bind(this);
    this.handleParamWayChange = this.handleParamWayChange.bind(this);
  };
  
  handleParamChange(event) {
    this.props.onParamChange(event.target.name, event.target.value);
  };
  handleParamWayChange(event, index, value) {
    this.props.onParamWayChange(value);
  };
  
  render () {
    var content = 
    <div>
      <TextField 
        name='threshold'
        value={this.props.values.threshold}
        onChange={this.handleParamChange}
        hintText="Adjust threshold level..."
        floatingLabelText="Threshold"
      />
      <br />
      <SelectField 
        name='way'
        value={this.props.values.way}
        onChange={this.handleParamWayChange}
        hintText="Detect peaks or valleys..."
        floatingLabelText="Peak - Valley"
      >
        <MenuItem value={"peak"} primaryText="peak"/>
        <MenuItem value={"valley"} primaryText="valley" />
      </SelectField>
      <br />
      <TextField 
        name='minD'
        value={this.props.values.minD}
        onChange={this.handleParamChange}
        hintText="Min. dist. between peaks"
        floatingLabelText="Min. distance between peaks"
      /><br />
      <TextField 
        name='before'
        value={this.props.values.before}
        onChange={this.handleParamChange}
        hintText="Number of points before peak"
        floatingLabelText="Points collected before peak"
      /><br />
      <TextField 
        name='after'
        value={this.props.values.after}
        onChange={this.handleParamChange}
        hintText="Number of points after peak"
        floatingLabelText="Points collected after peak"
      /><br />
    </ div>
      
    return (
      content
    );
    
  };
};
