import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {


  render() {

    const displayPizzas = this.props.pizzas.map(pizza => 
    <Pizza {...pizza} id={pizza.id} 
    addPizzaToForm={this.props.addPizzaToForm} 
    selectedPizza={this.props.selectedPizza}
    handleClick={this.props.handleClick}
    />)

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {displayPizzas}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
