// BlurParams.jsx
import React from "react";
import TextField from 'material-ui/TextField';

export default class BlurParams extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      alpha : props.alpha
    };
    this.handleAlphaChange = this.handleAlphaChange.bind(this);
  };
  
  handleAlphaChange(event){
    this.props.onAlphaChange(event.target.value);
  }
  
  render () {
    var content = 
    <div>
      <TextField 
        name='blur_alpha'
        value={this.props.alpha}
        onChange={this.handleAlphaChange}
        hintText="Maximum bluring of data"
        floatingLabelText="Maximum bluring of data"
      />
    </ div>
      
    return (
      content
    );
    
  }
}
