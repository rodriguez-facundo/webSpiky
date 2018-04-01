// BlurParams.jsx
import React from "react";
import TextField from 'material-ui/TextField';

export default class BlurParams extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleParamChange = this.handleParamChange.bind(this);
  };
  
  handleParamChange(event){
    this.props.onParamChange(event.target.name, event.target.value);
  }
  
  render () {
    var content = 
    <div>
      <TextField 
        name='alpha'
        value={this.props.values.alpha}
        onChange={this.handleParamChange}
        hintText="Maximum bluring of data"
        floatingLabelText="Maximum bluring of data"
      />
    </ div>
      
    return (
      content
    );
    
  }
}
