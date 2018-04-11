// Params.jsx
import React from "react";

import RunAlgorithm from './runAlgorithm'
import ImportData from '../import/importData'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import CheckBox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  block : {
    'maxWidth': 500,
  },
  paper : {
    'marginTop': 20,
    'maxWidth': 700
  },
  text: {
    'maxWidth': 200,
    'marginLeft': 18,
    'marginBottom': 10,
    'marginRight': 10,
    'marginTop': 10
  },
  radioButton: {
    'float': 'left',
    'maxWidth': 200,
    'marginTop': 45,
    'marginLeft': 20
  },
  radioButton1: {
    'maxWidth': 200,
    'marginTop': 45,
    'marginBottom': 50,
    'marginLeft': 20
  }
};

export default class Run extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      run: false
    };
    this.handleChange = this.handleChange.bind(this);

  };

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleChange = (event, value) =>  {
    this.props.onChange(event.target.name, value);
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
            name='doBatches'
            label="Batches"
            checked={this.props.settings.doBatches}
            style={styles.radioButton}
            onCheck={this.handleChange}
          />
          <div align='left'>
            <TextField
              name='batchTime'
              type='number'
              disabled={!this.props.settings.doBatches}
              value={this.props.settings.batchTime}
              onChange={this.handleChange}
              hintText="Batch time [sec]"
              floatingLabelText="Batch time [sec]"
              style={styles.text}
            />
            <TextField
              name='cores'
              type='number'
              disabled={!this.props.settings.doBatches}
              value={this.props.settings.cores}
              onChange={this.handleChange}
              hintText="Number of Cores"
              floatingLabelText="Number of Cores"
              style={styles.text}
            />
          </div>
          <CheckBox
            name='doDownSampling'
            label="down sampling signal"
            checked={this.props.settings.doDownSampling}
            style={styles.radioButton}
            onCheck={this.handleChange}
          />
          <div align='left'>  
            <TextField
              name='downSamplingFactor'
              type='number'
              disabled={!this.props.settings.doDownSampling}
              value={this.props.settings.downSamplingFactor}
              onChange={this.handleChange}
              hintText="Down Sampling Factor"
              floatingLabelText="Down Sampling Factor"
              style={styles.text}
            />
          </div>
          <CheckBox
            name='doMultiElectrodes'
            label="multi-electrodes"
            checked={this.props.settings.doMultiElectrodes}
            style={styles.radioButton}
            onCheck={this.handleChange}
          />
          <div align='left'>
            <TextField
              name='numberOfElectrodes'
              type='number'
              disabled={!this.props.settings.doMultiElectrodes}
              value={this.props.settings.numberOfElectrodes}
              onChange={this.handleChange}
              hintText="number of electrodes"
              floatingLabelText="number of electrodes"
              style={styles.text}
            />
          </div>
          <CheckBox
            name='doConfusion'
            checked={this.props.settings.doConfusion}
            label="Confusion Matrix"
            style={styles.radioButton1}
            onCheck={this.handleChange}
          />
          <CheckBox
            name='doClusters'
            checked={this.props.settings.doClusters}
            label="Plot 2D Clusters"
            style={styles.radioButton1}
            onCheck={this.handleChange}
          />
          <ImportData
            onImport={this.props.onImportRawData}
            buttonLabel={this.props.buttonLabel}
            style={styles.radioButton1}
          />
        </CardText>
        <CardActions>
          <RunAlgorithm
            params={this.props.params}
            settings={this.props.rawSignal}
            rawSignal={this.props.rawSignal}
            onRunAlgorithm={this.props.onReceivedResults}/>
        </CardActions>
      </Card>

    return (
      content
    );
  }
}
