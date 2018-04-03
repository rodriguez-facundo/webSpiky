import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

export default class ImportData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false,
      message : 'Nothing Imported'
    };
    
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  handleRequestClose = () => {
    this.setState({open : false})
  };
  
  onFormSubmit(event) {
    event.preventDefault();
    var fileName = event.target.files[0].name
  
    fetch('http://localhost:8887/uploadData', {
      method: 'POST',
      body: event.target.files[0],
    }).then((response) => {
      if (response.status=="200"){
        console.log(fileName, '1')
        this.props.onImportRawData('rawDataFileName', fileName);
        this.setState({
          message : 'Import OK',
        });
      }
      else {
        this.props.onImportData('Error')
        this.setState({message: 'Error'})
      }
      this.setState({open : true})
    });
  };

  render() {
    return (
      <RaisedButton 
        label={this.props.buttonLabel}
        labelPosition="before"
        style={styles.button}
        containerElement="label"
      >
        <input 
          type="file" 
          onChange={this.onFormSubmit} 
          style={styles.exampleImageInput}
        />
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
      </RaisedButton>
    );
  }
};
