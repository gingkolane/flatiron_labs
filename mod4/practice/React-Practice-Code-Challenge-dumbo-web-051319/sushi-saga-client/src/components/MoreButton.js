import React, { Component } from 'react';

class MoreButton extends Component {
  
  handleMoreButtonClick = () => {
    this.props.increaseIndex(this.props.index)
  }

  render() { 
    return ( 
      <button onClick={this.handleMoreButtonClick} index={this.props.index}>
            More sushi!
          </button>
     );
  }
}
 
export default MoreButton;