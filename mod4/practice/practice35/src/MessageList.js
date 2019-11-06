import React, { Component } from 'react';

class MessageList extends Component {

  render() { 
    const showMessageList = this.props.currentChannel.messages.map((message, idx) => <li key={idx}>{message.content.text}</li>)
    return ( <div>
      <h3>{this.props.currentChannel.name}</h3>
      <ul>
        {showMessageList}
      </ul>
    </div> );
  }
}
 
export default MessageList;