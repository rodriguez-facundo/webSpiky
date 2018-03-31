import React from 'react';
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
      file: '',
      message: ''
    };
    
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
    
  onFormSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    data.append('file', event.target.files[0]);
    // data.append('filename', this.fileName.value);

    fetch('http://localhost:8887/uploadParams', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((resp) => {
        this.props.onImportParams(resp);
      })
    });
    
  };

  render() {
    return (
      <RaisedButton 
        label="Import"
        labelPosition="before"
        style={styles.button}
        containerElement="label"
      >
        <input 
          type="file" 
          onChange={this.onFormSubmit} 
          style={styles.exampleImageInput}
        />
      </RaisedButton>
    );
  }
};
