import React, { Component } from 'react';
import MessageList from './MessageList.js';
import MessageCreator from './MessageCreator';

class Chat extends Component {


  render() { 
    return ( 
    <div>
      <MessageList currentChannel={this.props.currentChannel}/>
      <MessageCreator currentChannel={this.props.currentChannel} handleNewMessage={this.props.handleNewMessage} />
    </div> );
  }
}
 
export default Chat;