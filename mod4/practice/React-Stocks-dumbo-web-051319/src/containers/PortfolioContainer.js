import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {

    const displayPortfolio = this.props.portfolio.map(stock => < Stock {...stock} key={stock.id}/>)

    return (
      <div>
        <h2>My Portfolio</h2>
          {displayPortfolio}
      </div>
    )
  }

}

export default PortfolioContainer;
