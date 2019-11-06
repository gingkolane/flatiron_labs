<App/>
  // data entry as dataRoot
  state = {
    currentUser: dataRoot.currentUser,
    channels: dataRoot.channels
    currentChannel: {
      name: '',
      messages: []
    }
  } 
  // functions: 
  // To Chat then to messageCreator
  newMessage
  handleNewMessage
  // To Sidebar then to channelList
  addNewChannel
  handleChannelClick

  <Sidebar currentChannel={this.props.currentChannel} currentUser={this.state.currentUser} channels={this.state.channels} addNewChannel={this.props.addNewChannel} handleChannelClick={this.props.handleChannelClick} />
    
    <Profile currentUser={this.props.currentUser} />
    //data: currentUser

    <ChannelList channels={this.props.channels} addNewChannel={this.props.addNewChannel} handleChannelClick={this.props.handleChannelClick} />
    // data: channels
    // inverseData: newChannel(state) via addNewChannel
    // function: handleChannelClick what is this called? this is different from addNewChannel- it does not handle new data, it changes other component.
   
  <Chat currentChannel={this.state.currentChannel} newMessage={this.props.newMessage} handleNewMessage={this.props.handleNewMessage}/>

    <MessageList currentChannel={this.props.currentChannel}/>
    // data: currentChannel(name, messages)

    <MessageCreator currentChannel={this.props.currentChannel}/>
    // data: currentChannel
    // inverseData: newMessage, handleNewMessage
  
  componentDidMount() {
    fetch('http://localhost:3000/current_user')
      .then(res => res.json())
      .then(user => this.setState({currentUser: user}))

    fetch('http://localhost:3000/channels')
      .then(res => res.json())
      .then(channels => this.setState({channels: channels}))
  }

