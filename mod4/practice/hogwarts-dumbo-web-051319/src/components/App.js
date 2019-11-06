import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import TileContainer from './TileContainer'
import hogs from '../porkers_data';

class App extends Component {

  state = { 
    hogs: hogs,
    displayHogs: hogs

    showGreasedOnly: false
   }


  filterBy = (filterTerm) => {
    let filteredHogs = hogs;
    filteredHogs = this.state.hogs.filter(hog => hog.greased === true)

  }

  searchFoundArray = (searchTerm) => {
    return this.state.hogs.filter(hog => hog.name.includes(this.state.searchTerm))
  }

  filteredArray = () => {
    return this.state.hogs.filter(a => a.greased)
  }



  sortedArray = (sortTerm) => {
    
    let sortedHogs = [...hogs]

    switch (this.state.sortTerm) {
      
      case "name":
        sortedHogs.sort((a, b) => {a.name>b.name ? 1:-1});

      case "weight":
        sortedHogs.sort((a, b) => {a.weight>b.weight ? 1:-1});

      default:
        return;
    }

  }

  // Need a function to figure out which array to send down


  render() {
    console.log("how many greasedHogs", this.state.hogs)
    const filteredHOgs = hogs.filter
    return (
      <div className="App" onClick={(e) => this.props.func(evt.target.value)}>
          < Nav hogs={this.state.hogs} 
          filterGreased={this.filterGreased} 
          onSortedChange={this.onSortedChange}/>
          < TileContainer selectedHogs={this.filteredArray()}/>
      </div>
    )
  }
}

export default App;
