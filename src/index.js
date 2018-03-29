import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Index = () => {
  return (
    <div>
      <MuiThemeProvider>
        <Main />
      </MuiThemeProvider>
    </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"));
