import React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import PlotSpikes from './plotSpikes';
import PlotConfusion from './plotConfusion';
import PlotClusters from './plotClusters';

import Paper from 'material-ui/Paper';

import IconShowChart    from 'material-ui/svg-icons/editor/show-chart';
import IconImageBlurOff from 'material-ui/svg-icons/image/blur-off';
import IconBubbleChart  from 'material-ui/svg-icons/editor/bubble-chart';
import IconExpandLess    from 'material-ui/svg-icons/navigation/expand-less';

const spikesIcon    = <IconShowChart />;
const confusionIcon = <IconImageBlurOff />;
const clusterIcon   = <IconBubbleChart />;
const expandIcon   = <IconExpandLess />;


export default class Plots extends React.Component {
  state = {
    selection: 3,
  };

  select = (index) => {
    if (!this.props.disable){
      this.setState({selection: index});
    }
  }
  render() {
    if (this.state.selection == 0) {
        var content = <PlotSpikes values={this.props.data.spikes}/>
    } else if (this.state.selection == 1) {
        var content = <PlotConfusion values={this.props.data.confusion}/>
    } else if (this.state.selection == 2) {
        var content = <PlotClusters values={this.props.data.clusters}/>
    } else {
        var content = <div/>
    }
    
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selection}>
          <BottomNavigationItem
            label="Spikes"
            icon={spikesIcon}
            onClick={()=>this.select(0)}
          />
          <BottomNavigationItem
            label="Confusion"
            icon={confusionIcon}
            onClick={()=>this.select(1)}
          />
          <BottomNavigationItem
            label="Clusters"
            icon={clusterIcon}
            onClick={()=>this.select(2)}
          />
          <BottomNavigationItem
            icon={expandIcon}
            onClick={()=>this.select(3)}
          />
        </BottomNavigation>
        <br/>
        {content}
      </Paper>
    );
  }
}
