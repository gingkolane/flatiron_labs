import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  
  render() {

    const displayPokemons = this.props.pokemons.map(pokemon => 
      <PokemonCard {...pokemon} key={pokemon.id}/> )
    // use {...pokemon} to pass all attributes to pokeCard, like so: name={pokemon.name} pictures={pokemon.sprites} stats={pokemon.stats} 
    //idx makes things render funky ways
    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
            {displayPokemons}
        </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
