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

export default class Run extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,  
      doBatches: true,
      doConfusion: true,
      do2DPlots: true,
      data: 'Import',
      run: false
    };
      
    this.updateDoBatches = this.updateDoBatches.bind(this);
    this.updateDoConfusion = this.updateDoConfusion.bind(this);
    this.updateDo2DPlots = this.updateDo2DPlots.bind(this);
    this.handleImportData = this.handleImportData.bind(this);
    this.handleRunAlgorithm = this.handleRunAlgorithm.bind(this);
  };
  
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };
  updateDoBatches = (event, isCheckBoxChecked) => {
    this.setState({doBatches: !isCheckBoxChecked});
  };
  updateDoConfusion = (event, isCheckBoxChecked) => {
    this.setState({doConfusion: !isCheckBoxChecked});
  };
  updateDo2DPlots = (event, isCheckBoxChecked) => {
    this.setState({do2DPlots: !isCheckBoxChecked});
  };
  
  handleImportData(value){
    this.setState({data: value});
  };
  
  handleRunAlgorithm(value){
    this.props.onReceivedResults(value);
  };
  
  render () {
    var content = 
      <Card name='simulation.card'
        style={{float:'right', width:'49.5%'}}
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
            defaultChecked={true}
            label="Batches"
            style={styles.radioButton}
            onCheck={this.updateDoBatches}
          />
          <CheckBox
            defaultChecked={true}
            label="Confusion Matrix"
            style={styles.radioButton}
            onCheck={this.updateDoConfusion}
          />
          <CheckBox
            defaultChecked={true}
            label="Plot 2D Clusters"
            style={styles.radioButton}
            onCheck={this.updateDo2DPlots}
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
