// Params.jsx
import React from "react";

import RunAlgorithm from './runAlgorithm'
import ImportData from '../import/importData'
import TextField from 'material-ui/TextField';
import CheckBox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  }
};
const style = {
  float: 'left',
  display: 'inline-block',
  margin: '16px 32px 16px 0',
}

export default class Run extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,  
      batchTime: "",
      multicore: 1,
      doBatches: true,
      doConfusion: true,
      doClusters: true,
      data: 'Import',
      run: false
    };
      
    this.updateDoBatches = this.updateDoBatches.bind(this);
    this.updateDoConfusion = this.updateDoConfusion.bind(this);
    this.updateDoClusters = this.updateDoClusters.bind(this);
    this.handleImportData = this.handleImportData.bind(this);
    this.handleRunAlgorithm = this.handleRunAlgorithm.bind(this);
    this.handleBatchTimeChange = this.handleBatchTimeChange.bind(this);
    this.handleMultiCoreChange = this.handleMultiCoreChange.bind(this);
  };
  
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };
  
  updateDoBatches(event, isCheckBoxChecked){
    this.setState({doBatches: isCheckBoxChecked});
  };
  updateDoConfusion(event, isCheckBoxChecked) {
    this.setState({doConfusion: isCheckBoxChecked});
  };
  updateDoClusters = (event, isCheckBoxChecked) => {
    this.setState({doClusters: isCheckBoxChecked});
  };
  
  handleImportData(value){
    this.setState({data: value});
  };
  
  handleRunAlgorithm(value){
    this.props.onReceivedResults(value);
  };
  
  handleBatchTimeChange = (event) => {
    this.setState({batchTime: event.target.value})
  };
  handleMultiCoreChange = (event) => {
    this.setState({multiCore: event.target.value})
  };
  
  render () {
    var content = 
      <Card name='simulation.card'
        expanded={this.state.expanded} 
        onExpandChange={this.handleExpandChange} 
      >
        <CardHeader name='simulation.cardHeader'
          title="Run"
          subtitle="Define the results and run algorithm"
          actAsExpander={true}
          showExpandableButton={true}
        >
        </CardHeader>
        <CardText name='simulation.cardText' expandable={true}>
          <CheckBox
            style={style}
            name='doBatches'
            label="Batches"
            checked={this.state.doBatches}
            style={styles.radioButton}
            onCheck={this.updateDoBatches}
          />
          <TextField 
            style={style}
            name='run.batchTime'
            disabled={!this.state.doBatches}
            value={this.state.batchTime}
            onChange={this.handleBatchTimeChange}
            hintText="Batch time [sec]"
            floatingLabelText="Batch time [sec]"
          />
          <TextField 
            style={style}
            name='run.multiCore'
            disabled={!this.state.doBatches}
            value={this.state.multiCore}
            onChange={this.handleMultiCoreChange}
            hintText="Number of Cores"
            floatingLabelText="Number of Cores"
          />
          <CheckBox
            name='doConfusion'
            checked={this.state.doConfusion}
            label="Confusion Matrix"
            style={styles.radioButton}
            onCheck={this.updateDoConfusion}
          />
          <CheckBox
            name='doClusters'
            checked={this.state.doClusters}
            label="Plot 2D Clusters"
            style={styles.radioButton}
            onCheck={this.updateDoClusters}
          />
        <ImportData 
          onImportData={this.handleImportData} 
          label = {this.state.data}/>
        </CardText>
        <CardActions>
          <RunAlgorithm onRunAlgorithm={this.handleRunAlgorithm}/>
        </CardActions>
      </Card>
      
    return (
      content
    );  
  }
}
