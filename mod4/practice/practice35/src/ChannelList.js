import React, { Component } from 'react';

class ChannelList extends Component {

  state = {
    //channelName
    // value: ''
    channelName: ''
  }

  handleChange = (event) => {
    // this.setState({ value: event.target.value });

    this.setState({ [event.target.name]: event.target.value });
  } 

  addNewChannel = () => {
    this.props.addNewChannel(this.state.channelName)
  }

  handleChannelClick = (e) => {
    this.props.handleChannelClick(e.target.className)

  }

  render() { 

    const showChannels = this.props.channels.map ((channel, idx)=> 
    <li className={channel.name} onClick={this.handleChannelClick} key={idx}> {channel.name} </li> 
    )

    return ( <div>
      <input type="text" name="channelName" value={this.state.channelName} onChange={this.handleChange} />
      <button onClick={this.addNewChannel}>+</button>
      <ul>
        {showChannels}
      </ul>
    </div> );
  }
}
 
export default ChannelList;