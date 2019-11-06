import React, { Component } from 'react';

import Tile from './Tile.js';

class TileContainer extends Component {
  
  render() { 
    const tiles = this.props.hogs.map((hog, idx) => 
      <Tile hog={hog}  key={idx}/>
    );

    return ( 
      <div className="indexWrapper">
        {tiles}
      </div>
     );
  }
}
 
export default TileContainer;

