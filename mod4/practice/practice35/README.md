        
<App />
  // state = currentUser, currentChannel, channels

  <Sidebar currentUser={} channels={} addNewChannel={} handleChannelClick={}/>
    
    <Profile currentUser={} /> 
    //data: currentUser

    <ChannelList channels={} addNewChannel={} handleChannelClick={} />
    // data: channels
    // inverseData: newChannel(state) via addNewChannel
    // function: handleChannelClick what is this called? this is different from addNewChannel
   
  <Chat currentChannel={} handleNewMessage={}/>

    <MessageList currentChannel={}/>
    // data: currentChannel

    <MessageCreator currentChannel={} newMessage={} handleNewMessage={}/>
    // data: currentChannel
    // inverseData: newMessage, handleNewMessage
  
  componentDidMount() {
    fetch('http://localhost:3000/current_user')
      .then(res => res.json())
      .then(user => this.setState({currentUser: user}))

    fetch('http://localhost:3000/channels')
      .then(res => res.json())
      .then(channels => this.setState({channels: channels, currentChannel: channels[0]}))
  }

