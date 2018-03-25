// PksParams.jsx
import React from "react";
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

export default class PksParams extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      threshold: props.values.threshold,
      way: props.values.way,
      minD: props.values.minD,
      before: props.values.before,
      after: props.values.before
    };
    
    this.handleThresholdChange = this.handleThresholdChange.bind(this);
    this.handleWayChange = this.handleWayChange.bind(this);
    this.handleMinDChange = this.handleMinDChange.bind(this);
    this.handleBeforeChange = this.handleBeforeChange.bind(this);
    this.handleAfterChange = this.handleAfterChange.bind(this);
  };
  
  handleThresholdChange(event) {
    this.props.onThresholdChange(event.target.value);
  };
  handleWayChange(event, index, value) {
    this.props.onWayChange(value);
  };
  handleMinDChange(event) {
    this.props.onMinDChange(event.target.value);
  };
  handleBeforeChange(event) {
    this.props.onBeforeChange(event.target.value);;
  };
  handleAfterChange(event) {
    this.props.onAfterChange(event.target.value);
  };
  
  render () {
    var content = 
    <div>
      <TextField 
        name='threshold'
        value={this.props.values.threshold}
        onChange={this.handleThresholdChange}
        hintText="Adjust threshold level..."
        floatingLabelText="Threshold"
      />
      <br />
      <SelectField 
        name='way'
        value={this.props.values.way}
        onChange={this.handleWayChange}
        hintText="Detect peaks or valleys..."
        floatingLabelText="Peak - Valley"
      >
        <MenuItem value={1} primaryText="Peak"/>
        <MenuItem value={2} primaryText="Valley" />
      </SelectField>
      <br />
      <TextField 
        name='minD'
        value={this.props.values.minD}
        onChange={this.handleMinDChange}
        hintText="Min. dist. between peaks"
        floatingLabelText="Min. distance between peaks"
      /><br />
      <TextField 
        name='before'
        value={this.props.values.before}
        onChange={this.handleBeforeChange}
        hintText="Number of points before peak"
        floatingLabelText="Points collected before peak"
      /><br />
      <TextField 
        name='after'
        value={this.props.values.after}
        onChange={this.handleAfterChange}
        hintText="Number of points after peak"
        floatingLabelText="Points collected after peak"
      /><br />
    </ div>
      
    return (
      content
    );
    
  };
};
