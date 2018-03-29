import React from 'react';

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
      response.json().then((body) => {
        console.log(body)
      })
    });
    console.log('message received: ', this.state.message)
  };

  render() {
    return (
      <input type="file" onChange={this.onFormSubmit} />
    );
  }
  
  // render() {
  //   return (
  //     <form onSubmit={this.onFormSubmit}>
  //       <h1>File Upload</h1>
  //       <input type="file" onChange={this.onChange} />
  //       <button type="submit">Upload</button>
  //     </form>
  //   );
  // }
}
