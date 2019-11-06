import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'

class SushiContainer extends Component {

  render() { 

    let currentFour = this.props.sushis.splice(this.props.index, this.props.index+4);
    console.log(currentFour)
    const displayCurrentFour = currentFour.map((sushi, idx) => {
      return (
        <div key={idx}>
          <img src={sushi.img_url} className="sushi plate" alt="one sushi" />
          <br/>
          <h4 className="sushi-details">{sushi.name} - {sushi.price}</h4>
        </div>
      )
    })
      
    return ( 
        <div className="belt">
          {displayCurrentFour}
          <MoreButton index={this.props.index} increaseIndex={this.props.increaseIndex} />
        </div>
     )
  }
}
 
export default SushiContainer;