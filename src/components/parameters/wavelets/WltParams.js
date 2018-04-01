// WltParams.jsx
import React from "react";
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

export default class WltParams extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleParamChange = this.handleParamChange.bind(this);
    this.handleParamWFuncChange = this.handleParamWFuncChange.bind(this);
    this.handleParamWModeChange = this.handleParamWModeChange.bind(this)
  };
  
  handleParamChange(event){
    this.props.onParamChange(event.target.name, event.target.value)
  };
  handleParamWFuncChange(event, index, value){
    this.props.onParamWFuncChange(value);
  };
  handleParamWModeChange(event, index, value){
    this.props.onParamWModeChange(value);
  };

  render () {
    var content = 
    <div>
      <TextField 
        name='wLvl'
        value={this.props.values.wLvl}
        onChange={this.handleParamChange} 
        hintText="Wavelet decomposition level"
        floatingLabelText="Decomposition level"
      /><br />
      <SelectField 
        id='wFunc'
        value={this.props.values.wFunc}
        onChange={this.handleParamWFuncChange}  
        hintText="Wavelet function"
        floatingLabelText="Select wavelet function"
      >
        <MenuItem value={"haar"} primaryText="Haar" />
        <MenuItem value={"mexican Hat"} primaryText="Mexican Hat" />
        <MenuItem value={"gaussian"} primaryText="Gaussian" />
        <MenuItem value={"Daubechies"} primaryText="Daubechies" />
        <MenuItem value={"shannon"} primaryText="Shannon" />
      </SelectField>
      <br />
      <SelectField 
        id='wMode' 
        value={this.props.values.wMode}
        onChange={this.handleParamWModeChange} 
        hintText="Spike extension mode"
        floatingLabelText="Extension mode"
      >
        <MenuItem value={"zero"} primaryText="zero" />
        <MenuItem value={"constant"} primaryText="constant" />
        <MenuItem value={"symmetric"} primaryText="symmetric" />
        <MenuItem value={"periodic"} primaryText="periodic" />
        <MenuItem value={"smooth"} primaryText="smooth" />
        <MenuItem value={"periodization"} primaryText="periodization" />
        <MenuItem value={"periodization"} primaryText="reflect" />
      </SelectField>
      <br />
    </ div>
      
    return (
      content
    );
    
  }
}
