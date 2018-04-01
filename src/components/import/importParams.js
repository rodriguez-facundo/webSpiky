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

export default class ImportParams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonLabel: 'Import',
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
    
    const data = new FormData();
    data.append('file', event.target.files[0]);
    
    fetch('http://localhost:8887/uploadParams', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((resp) => {
        this.props.onImportParams(resp);
        this.setState({
          buttonLabel : fileName,
          message : 'Import OK',
          open : true
        })
      })
    });
  };

  render() {
    return (
      <RaisedButton 
        label={this.state.buttonLabel}
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
