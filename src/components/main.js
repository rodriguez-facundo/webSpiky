// Main.jsx
import React from 'react';

import Params from './parameters/Params';
import Run from './run/run'
import PlotSpikes from './plots/plotSpikes';
import PlotConfusion from './plots/plotConfusion';
import PlotClusters from './plots/plotClusters';

import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import IconRun from 'material-ui/svg-icons/action/touch-app';
import IconParams    from 'material-ui/svg-icons/action/build';
import IconSpikes    from 'material-ui/svg-icons/editor/show-chart';
import IconConfusion from 'material-ui/svg-icons/image/blur-off';
import IconClusters  from 'material-ui/svg-icons/editor/bubble-chart';
import IconContract  from 'material-ui/svg-icons/navigation/expand-less';

const RunIcon = <IconRun/>;
const ParamsIcon    = <IconParams/>;
const spikesIcon    = <IconSpikes />;
const confusionIcon = <IconConfusion/>;
const clusterIcon   = <IconClusters />;
const expandIcon    = <IconContract />;

import AppBar from 'material-ui/AppBar';
import SvgIcon from 'material-ui/SvgIcon';
import Toolbar from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';


const Icon = (props) => (
    <SvgIcon {...props}>
      <path d="M313.2 47.5c1.2-13 21.3-14 36.6-8.7.9.3 26.2 9.7 19 15.2-27.9-7.4-56.4 18.2-55.6-6.5zm-201 6.9c30.7-8.1 62 20 61.1-7.1-1.3-14.2-23.4-15.3-40.2-9.6-1 .3-28.7 10.5-20.9 16.7zM319.4 160c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-159.7 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm318.5 163.2c-9.9 24-40.7 11-63.9-1.2-13.5 69.1-58.1 111.4-126.3 124.2.3.9-2-.1 24 1 33.6 1.4 63.8-3.1 97.4-8-19.8-13.8-11.4-37.1-9.8-38.1 1.4-.9 14.7 1.7 21.6 11.5 8.6-12.5 28.4-14.8 30.2-13.6 1.6 1.1 6.6 20.9-6.9 34.6 4.7-.9 8.2-1.6 9.8-2.1 2.6-.8 17.7 11.3 3.1 13.3-14.3 2.3-22.6 5.1-47.1 10.8-45.9 10.7-85.9 11.8-117.7 12.8l1 11.6c3.8 18.1-23.4 24.3-27.6 6.2.8 17.9-27.1 21.8-28.4-1l-.5 5.3c-.7 18.4-28.4 17.9-28.3-.6-7.5 13.5-28.1 6.8-26.4-8.5l1.2-12.4c-36.7.9-59.7 3.1-61.8 3.1-20.9 0-20.9-31.6 0-31.6 2.4 0 27.7 1.3 63.2 2.8-61.1-15.5-103.7-55-114.9-118.2-25 12.8-57.5 26.8-68.2.8-10.5-25.4 21.5-42.6 66.8-73.4.7-6.6 1.6-13.3 2.7-19.8-14.4-19.6-11.6-36.3-16.1-60.4-16.8 2.4-23.2-9.1-23.6-23.1.3-7.3 2.1-14.9 2.4-15.4 1.1-1.8 10.1-2 12.7-2.6 6-31.7 50.6-33.2 90.9-34.5 19.7-21.8 45.2-41.5 80.9-48.3C203.3 29 215.2 8.5 216.2 8c1.7-.8 21.2 4.3 26.3 23.2 5.2-8.8 18.3-11.4 19.6-10.7 1.1.6 6.4 15-4.9 25.9 40.3 3.5 72.2 24.7 96 50.7 36.1 1.5 71.8 5.9 77.1 34 2.7.6 11.6.8 12.7 2.6.3.5 2.1 8.1 2.4 15.4-.5 13.9-6.8 25.4-23.6 23.1-3.2 17.3-2.7 32.9-8.7 47.7 2.4 11.7 4 23.8 4.8 36.4 37 25.4 70.3 42.5 60.3 66.9zM207.4 159.9c.9-44-37.9-42.2-78.6-40.3-21.7 1-38.9 1.9-45.5 13.9-11.4 20.9 5.9 92.9 23.2 101.2 9.8 4.7 73.4 7.9 86.3-7.1 8.2-9.4 15-49.4 14.6-67.7zm52 58.3c-4.3-12.4-6-30.1-15.3-32.7-2-.5-9-.5-11 0-10 2.8-10.8 22.1-17 37.2 15.4 0 19.3 9.7 23.7 9.7 4.3 0 6.3-11.3 19.6-14.2zm135.7-84.7c-6.6-12.1-24.8-12.9-46.5-13.9-40.2-1.9-78.2-3.8-77.3 40.3-.5 18.3 5 58.3 13.2 67.8 13 14.9 76.6 11.8 86.3 7.1 15.8-7.6 36.5-78.9 24.3-101.3z"/>
    </SvgIcon>
);

export default class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selection: 5,
      disablePlots : true,
      params: {

        order: '',
        rate: '',
        low: '',
        high: '',

        threshold: '',
        minD: '',
        before: '',
        after: '',

        resolution: '',
        minDsimultaneous: '',
        ratioElimination: '',

        wLvl: '',
        wFunc: '',
        wMode: '',

        gaussians : '',
        features: '',
        correlation: '',
        initializations: '',
        
        alpha: '',

      },
      results : {
        'spikes' : {
          'x': [[]],
          'y': [[]]
        },
        'clusters': {
          'x': [[]],
          'y': [[]],
          'labels': [],
        },
        'confusion':{
          'x': [],
          'y': [],
          'z': [[]],
        }
      },
    };
    this.handleParamChange = this.handleParamChange.bind(this);
    this.handleParamWFuncChange = this.handleParamWFuncChange.bind(this);
    this.handleParamWModeChange = this.handleParamWModeChange.bind(this);
    this.handleParamWayChange = this.handleParamWayChange.bind(this);
    this.handleImportParams = this.handleImportParams.bind(this);
    this.handleReceivedResults = this.handleReceivedResults.bind(this);
  };
  
  handleParamChange = (name, value) => {
    this.setState(prevState => ({
      params: {...prevState.params, [name]: value}}
    ))  
  };
  handleParamWFuncChange = (value) => {
    this.setState(prevState => ({
      params: {...prevState.params, wFunc: value}}
    ))  
  };
  handleParamWModeChange = (value) => {
    this.setState(prevState => ({
      params: {...prevState.params, wMode: value}}
    ))  
  };
  handleParamWayChange = (value) => {
    this.setState(prevState => ({
      params: {...prevState.params, way: value}}
    ))  
  };
  handleImportParams = (values) => {
    this.setState({params: values})
  };
  
  select = (index) => {this.setState({selection: index});};
  selectPlot = (index) => {
    if (!this.state.disablePlots) {
      this.setState({selection: index});
    };
  };
  
  handleReceivedResults = (value) => {
    this.setState({results : value, disablePlots: false});
  };
  
  render () {   
    if (this.state.selection==0){
        var content = <PlotSpikes values={this.state.results.spikes}/>
    } else if (this.state.selection == 1){
        var content = <PlotConfusion values={this.state.results.confusion}/>
    } else if (this.state.selection == 2) {
        var content = <PlotClusters values={this.state.results.clusters}/>
    } else if (this.state.selection == 3) {
        var content = 
          <Params 
            params={this.state.params} 
            onParamChange={this.handleParamChange}
            onParamWFuncChange={this.handleParamWFuncChange}
            onParamWModeChange={this.handleParamWModeChange}
            onParamWayChange={this.handleParamWayChange}
            onImportParams={this.handleImportParams}
          />
    } else if (this.state.selection == 4) {
        var content = <Run onReceivedResults={this.handleReceivedResults}/>
    } else {
        var content = <div/>
    }
    
    return (
      <div>
        <AppBar
          name='title_bar'  
          showMenuIconButton={true}
          iconElementLeft={<IconButton><Icon width='20px' height='20px' viewBox="0 0 512 512"/></IconButton>}
          iconStyleLeft={{marginLeft:5, fontSize:'50px', backgroundColor: '#2196F3', color:'#ffffff'}}
          style={{backgroundColor: '#2196F3'}}
          title='Spiky'/>
        <AppBar 
          name='Subtitle'
          showMenuIconButton={false} 
          style={{backgroundColor: '#00BCD4', height:25}}
        /><br/>
        <Paper zDepth={2}>
          <BottomNavigation selectedIndex={this.state.selection}>
            <BottomNavigationItem
              label="Spikes"
              icon={spikesIcon}
              onClick={()=>this.selectPlot(0)}
            />
            <BottomNavigationItem
              label="Confusion"
              icon={confusionIcon}
              onClick={()=>this.selectPlot(1)}
            />
            <BottomNavigationItem
              label="Clusters"
              icon={clusterIcon}
              onClick={()=>this.selectPlot(2)}
            />
            <BottomNavigationItem
              label="Parameters"
              icon={ParamsIcon}
              onClick={()=>this.select(3)}
            />
            <BottomNavigationItem
              label="Run"
              icon={RunIcon}
              onClick={()=>this.select(4)}
            />
            <BottomNavigationItem
              icon={expandIcon}
              onClick={()=>this.select(5)}
            />
          </BottomNavigation>
          {content}
        </Paper>
      </div>
    );  
  }
}
