import React from 'react';
import Sidebar from "./Sidebar";
import Chat from './Chat';
import './App.css'
import dataRoot from './data.js';

class App extends React.Component {
  
  state = {
    currentUser: dataRoot.current_user,
    channels: dataRoot.channels,
    currentChannel: dataRoot.channels[3]
  } 

  handleNewMessage = (messageText) => {
    
    //create new message object from messageText
    const newMessage = {
        user: this.state.currentUser,
        content: {
          id: 1,
          sent: "some-date",
          text: messageText
        }
      }

    //update currentChannel, replacing messages with messages plus new messages
    const updatedChannel = {
      ...this.state.currentChannel,
      messages: [...this.state.currentChannel.messages, newMessage]
    }

    //update channels: replace the old channel info with the updated channel info
    const updatedChannels = this.state.channels.map(channel => {
      if (channel.name === updatedChannel.name) {
        return updatedChannel
      }
      return channel
    })

    this.setState({ currentChannel: updatedChannel, channels: updatedChannels });

  }

  addNewChannel = (channelName) => {
    const newChannel= {
      name: channelName,
      messages: []
    }
    
    const updatedChannels = [...this.state.channels, newChannel]

    this.setState({ channels: updatedChannels});
  }

  handleChannelClick = (channelName) => {

    const clickedChannel = this.state.channels.find(channel => channel.name === channelName)

    this.setState({ currentChannel: clickedChannel });
   
  }



  
  render() { 
    // const channels = this.state.channels  
    return (
      <div>
        <Sidebar currentUser={this.state.currentUser} channels={this.state.channels} currentChannel={this.state.currentChannel}  addNewChannel={this.addNewChannel} handleChannelClick={this.handleChannelClick} />
        <Chat currentChannel={this.state.currentChannel} newMessage={this.newMessage} handleNewMessage={this.handleNewMessage}/>
      </div> 
    )
  }
}
export default App;

