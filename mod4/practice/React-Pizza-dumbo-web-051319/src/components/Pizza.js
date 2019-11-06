import React from "react"

const Pizza = (props) => {

  // state = {
  //   selectedPizza: {}
  // }

  // handleClick = (event) => {
  //   debugger
  //   this.setState({ selectedPizza: event.target});
  // }
  const handleClick = () => props.addPizzaToForm(props)

  return (
    <tr id={props.id}>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? "Yes":"No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleClick} >Edit Pizza</button></td>
    </tr>
  );

}

export default Pizza;
