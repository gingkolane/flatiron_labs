import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  } 


  // //on submit, we want to add this new pokemon to pokemons 
  // handleSubmit = (newPokemon) => {

  //   //create a new pokemon
  //   pokemonObj = {
  //     name: {newPokemon.name},
  //     stats: [
  //       {
  //         value: {newPokemon.hp},
  //         name: "hp"
  //       }
  //     ],

  //     sprites: {
  //       front: {newPokemon.frontUrl},
  //       back: {newPokemon.backUrl}
  //     }
  //   }
  //   debugger
  //   //update pokemons list
  //   this.props.addNewToPokemons(newPokemon);

  // }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
