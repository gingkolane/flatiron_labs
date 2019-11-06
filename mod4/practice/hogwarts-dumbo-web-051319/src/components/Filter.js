import React, { Component } from 'react';
import DetailsDiv from './DetailsDiv';

class Filter extends Component {
  state = { 
    sortBy: ''

   }


  filterBy = (filterTerm) => {
    let filteredHogs = hogs;
    filteredHogs = this.state.hogs.filter(hog => hog.greased === true)
    this.setState({ hogs: filteredHogs });
  }

  sortBy = (sortTerm) => {
    
    let sortedHogs = [...hogs]

    switch (this.state.sortBy) {
      
      case "name":
        sortedHogs.sort((a, b) => {a.name>b.name ? 1:-1});

      case "weight":
        sortedHogs.sort((a, b) => {a.weight>b.weight ? 1:-1});

      default:
        return;

    }
    sortedHogs

  }
handle 
this.props.sortBy(name)

  render() { 
    return ( 
      <div>


      </div>

     );
  }
}
 
export default Filter;