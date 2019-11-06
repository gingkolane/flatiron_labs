import React, { Component } from 'react';
import Stock from '../components/Stock'


class StockContainer extends Component {

  render() {
    const displayStocks = this.props.stocks.map(stock => {
      return (<Stock 
      {...stock} 
      key={stock.id} 
      handleStockClick = {this.props.handleStockClick}
      />)
    })

    return (
      <div>
        <h2>Stocks</h2>
        {displayStocks}
      </div>
    );
  }

}

export default StockContainer;
