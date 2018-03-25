// FilterParams.jsx
import React from "react";
import TextField from 'material-ui/TextField';

export default class FilterParams extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      order: props.values.order,
      rate: props.values.rate,
      low: props.values.low,
      high: props.values.high,
    };
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleLowChange = this.handleLowChange.bind(this);
    this.handleHighChange = this.handleHighChange.bind(this);
  };

  handleOrderChange(event) {
    this.props.onOrderChange(event.target.value);
  }
  handleRateChange(event) {
    this.props.onRateChange(event.target.value);
  }
  handleLowChange(event) {
    this.props.onLowChange(event.target.value);
  }
  handleHighChange(event) {
    this.props.onHighChange(event.target.value);
  }
  
  render () {
    var content = 
    <div>
      <TextField 
        name='filter_order'
        value={this.props.values.order}
        onChange={this.handleOrderChange}
        hintText="Filter's order"
        floatingLabelText="Filter's order"
      /><br />
      <TextField 
        name='sample_rate'
        value={this.props.values.rate}
        onChange={this.handleRateChange}
        hintText="Sample Rate [Hz]"
        floatingLabelText="Sample rate [Hz]"
      /><br />
      <TextField 
        name='low_filter_freq'
        value={this.props.values.low}
        onChange={this.handleLowChange}
        hintText="Filter Low cut Frequency"
        floatingLabelText="Filter Low cut Frequency"
      /><br />
      <TextField 
        name='high_filter_freq'
        value={this.props.values.high}
        onChange={this.handleHighChange}
        hintText="Filter High Cut Frequency"
        floatingLabelText="Filter High Cut Frequency"
      /><br />
    </ div>
      
    return (
      content
    );
    
  }
}
