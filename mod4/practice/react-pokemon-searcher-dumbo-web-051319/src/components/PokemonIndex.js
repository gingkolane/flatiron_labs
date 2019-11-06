import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import OurSearchBar from './OurSearchBar';
import _ from 'lodash'

class PokemonIndex extends React.Component {

  state = {
    allPokemons: [],
    searchTerm:''
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(pokemons => this.setState({ allPokemons: pokemons }))
  }
  
  addNewToPokemons = (newPokemon) => {
    this.setState({ pokemons: [...this.state.pokemons, newPokemon] });
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  } 

  
  render() {
    const filteredPokemons = this.state.allPokemons.filtered(pokemon => pokemon.name.includes(this.state.searchTerm))
    
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        {/* <OurSearchBar searchTerm={this.searchTerm} handleSearch={this.handleSearch} /> */}
        <input value={this.state.searchTerm} onChange={this.handleChange} />
        <br />
        <PokemonCollection pokemons={filteredPokemons} />
        <br />
        <PokemonForm addNewToPokemons={this.addNewToPokemons}/>
      </div>
    )
  }
}

export default PokemonIndex;
