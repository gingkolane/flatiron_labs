import React, { Component } from 'react';
import Profile from "./Profile.js";
import ChannelList from './ChannelList.js';


class Sidebar extends Component {
  
  state = { 
    message: ''
   }

  render() { 
    return ( 
      <div> 
        <Profile currentUser={this.props.currentUser} />
        <ChannelList channels={this.props.channels} addNewChannel={this.props.addNewChannel} handleChannelClick={this.props.handleChannelClick} />
      </div>
    );
  }
}
 
export default Sidebar;