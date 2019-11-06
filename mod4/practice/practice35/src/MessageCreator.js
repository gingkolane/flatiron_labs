import React, { Component } from 'react';

class MessageCreator extends Component {
  
  state = { 
    messageText: ""
   }

  setMessageText = (e) => {
    this.setState({ messageText: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleNewMessage(this.state.messageText);
  }

  render() { 
    return ( <div>
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.messageText} onChange={this.setMessageText}/>
        <button>Submit new message</button>
      </form>
    </div> );
  }
}
 
export default MessageCreator;