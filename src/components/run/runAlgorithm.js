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

export default class RunAlgorithm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonLabel: 'Run',
      open : false,
      message : 'Nothing Running'
    };
    
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleRequestClose = () => {
    this.setState({open : false})
  };
  
  handleClick = (event) => {
    event.preventDefault();
    
    const data = new FormData();
    data.append('data', '{"AAA": 23}');
    
    fetch('http://localhost:8887/runAlgorithm', {
      method: 'POST',
      body: data,
    }).then((response) => {
      if (response.status=="200") {
        response.json().then((resp) => {
          console.log(resp)
          this.props.onRunAlgorithm(resp);
          this.setState({
            buttonLabel : 'Done',
            message : 'DONE!',
            open : true
          })
        })
      }
      else {
        this.setState({
          buttonLabel : 'Error',
          message : 'Error!',
          open : true
        })
      }
    });
  };

  render() {
    return (
      <RaisedButton 
        label={this.state.buttonLabel}
        labelPosition="before"
        style={styles.button}
        containerElement="label"
        onClick={this.handleClick}
      >
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
