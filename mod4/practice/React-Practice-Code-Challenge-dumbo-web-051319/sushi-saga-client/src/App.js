import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    index: 0,
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({ sushis:sushis }))
  }

  increaseIndex = () => {
    let updatedIndex = this.state.index + 4
    this.setState({ index: updatedIndex });
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushis={this.state.sushis} index={this.state.index} increaseIndex={this.increaseIndex}/>
        <Table />
      </div>
    );
  }
}

export default App;