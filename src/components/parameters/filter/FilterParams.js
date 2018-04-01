// FilterParams.jsx
import React from "react";
import TextField from 'material-ui/TextField';

export default class FilterParams extends React.Component {
  
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
        name='order'
        value={this.props.values.order}
        onChange={this.handleParamChange}
        hintText="Filter's order"
        floatingLabelText="Filter's order"
      /><br />
      <TextField 
        name='rate'
        value={this.props.values.rate}
        onChange={this.handleParamChange}
        hintText="Sample Rate [Hz]"
        floatingLabelText="Sample rate [Hz]"
      /><br />
      <TextField 
        name='low'
        value={this.props.values.low}
        onChange={this.handleParamChange}
        hintText="Filter Low cut Frequency"
        floatingLabelText="Filter Low cut Frequency"
      /><br />
      <TextField 
        name='high'
        value={this.props.values.high}
        onChange={this.handleParamChange}
        hintText="Filter High Cut Frequency"
        floatingLabelText="Filter High Cut Frequency"
      /><br />
    </ div>
      
    return (
      content
    );
    
  }
}
