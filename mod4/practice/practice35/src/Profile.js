import React, { Component } from 'react';

class Profile extends Component {
  state = {  }
  render() { 
    return ( <div>
      <img src = {this.props.currentUser.profile_picture} alt="ott" />
      <h3> {this.props.currentUser.username}</h3>
    </div> );
  }
}
 
export default Profile;

