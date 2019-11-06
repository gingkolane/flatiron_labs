import React, { Component } from 'react';


class Stock extends Component {

  handleClick = () => {
    console.log("this is id passed in", this.props.id)
    this.props.handleStockClick(this.props.id)
  } 

  render() { 
    console.log("this is the this.prop in Stock", this.props)
    return ( 
      <div onClick={this.handleClick} id={this.props.id}>
        <div className="card"  >
          <div className="card-body">
            <h5 className="card-title" >{this.props.name}</h5>
            <p className="card-text">{
                `${this.props.ticker}: ${this.props.price}`
              }</p>
          </div>
        </div>
    </div>



     );
  }
}
 
export default Stock;