import React, { Component } from 'react';
import DetailsDiv from './DetailsDiv.js'

class Tile extends Component {
  
  constructor() {
    super()
    this.state = {
      show: false,
    }
  }

  showDetailOnClick = (event) => {
    this.setState({
      show: !this.state.show
    })
  }

  render() { 
    console.log("Props:", this.props)

    // const pigNameNeat = `${this.props.hog.name.toLowerCase().replace(/\s+/g, '_')}.jpg`
    const pigNameNeat = `${this.props.hog.name.toLowerCase().split(' ').join('_')+ '.jpg'
    const imgURL = `/hog-imgs/${pigNameNeat}`

    return ( 
      <div className="pigTile" onClick={this.showDetailOnClick}>
        <img src={imgURL} alt="pig"/>
        <h2>{this.props.hog.name}</h2>

        {
          this.state.show ?
        (<div ><DetailsDiv hog={this.props.hog} /></div>)
        :
        (null)}
      </div>
     );
  }
}
 
export default Tile;

this.state.show ? (<div>I am here</div>):(null)