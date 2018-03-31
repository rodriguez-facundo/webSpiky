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
        <MenuItem value={"haar"} primaryText="Haar" />
        <MenuItem value={"mexican Hat"} primaryText="Mexican Hat" />
        <MenuItem value={"gaussian"} primaryText="Gaussian" />
        <MenuItem value={"Daubechies"} primaryText="Daubechies" />
        <MenuItem value={"shannon"} primaryText="Shannon" />
      </SelectField>
      <br />
      <SelectField 
        name='params.wavelet.mode' 
        value={this.props.values.wMode}
        onChange={this.handleWModeChange} 
        hintText="Spike extension mode"
        floatingLabelText="Extension mode"
      >
        <MenuItem value={"zero"} primaryText="zero" />
        <MenuItem value={"constant"} primaryText="constant" />
        <MenuItem value={"symmetric"} primaryText="symmetric" />
        <MenuItem value={"periodic"} primaryText="periodic" />
        <MenuItem value={"smooth"} primaryText="smooth" />
        <MenuItem value={""} primaryText="periodization" />
        <MenuItem value={"periodization"} primaryText="reflect" />
      </SelectField>
      <br />
    </ div>
      
    return (
      content
    );
    
  }
}
