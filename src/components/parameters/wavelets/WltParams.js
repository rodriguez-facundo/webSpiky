// WltParams.jsx
import React from "react";
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

export default class WltParams extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      wLvl : props.values.wLvl,
      wFunc : props.values.wFunc, 
      wMode : props.values.wMode,
    };
    
  this.handleWLvlChange = this.handleWLvlChange.bind(this);
  this.handleWFuncChange = this.handleWFuncChange.bind(this);
  this.handleWModeChange = this.handleWModeChange.bind(this);
  
  };
  
  handleWLvlChange(event){
    this.props.onWLvlChange(event.target.value)
  };
  handleWFuncChange(event, index, value){
    this.props.onWFuncChange(value)
  };
  handleWModeChange(event, index, value){
    this.props.onWModeChange(value)
  };
  
  render () {
    var content = 
    <div>
      <TextField 
        name='params.wavelet.level'
        value={this.props.values.wLvl}
        onChange={this.handleWLvlChange} 
        hintText="Wavelet decomposition level"
        floatingLabelText="Decomposition level"
      /><br />
      <SelectField 
        name='params.wavelet.function'
        value={this.props.values.wFunc}
        onChange={this.handleWFuncChange}  
        hintText="Wavelet function"
        floatingLabelText="Select wavelet function"
      >
        <MenuItem value={1} primaryText="Haar" />
        <MenuItem value={2} primaryText="Mexican Hat" />
        <MenuItem value={3} primaryText="Gaussian" />
        <MenuItem value={4} primaryText="Daubechies" />
        <MenuItem value={5} primaryText="Shannon" />
      </SelectField>
      <br />
      <SelectField 
        name='params.wavelet.mode' 
        value={this.props.values.wMode}
        onChange={this.handleWModeChange} 
        hintText="Spike extension mode"
        floatingLabelText="Extension mode"
      >
        <MenuItem value={1} primaryText="zero" />
        <MenuItem value={2} primaryText="constant" />
        <MenuItem value={3} primaryText="symmetric" />
        <MenuItem value={4} primaryText="periodic" />
        <MenuItem value={5} primaryText="smooth" />
        <MenuItem value={6} primaryText="periodization" />
        <MenuItem value={7} primaryText="reflect" />
      </SelectField>
      <br />
    </ div>
      
    return (
      content
    );
    
  }
}
