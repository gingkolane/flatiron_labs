import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(stocks => this.setState({ stocks: stocks }))
  }

  handleStockClick= (stockid) => {
    // console.log("this is stockid passed in inside handleStockClick", stockid)
    const selectedStock = this.state.stocks.find(stock => (stock.id === stockid))
    const updatedPortfolio = [...this.state.portfolio, selectedStock]
    // console.log("selectedStock, updatedPortfolio", selectedStock, updatedPortfolio)
    this.setState({ portfolio: updatedPortfolio})
  }

  render() {
    console.log("this is the stocks in main container", this.state.stocks)

    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer 
                stocks={this.state.stocks}
                handleStockClick = {this.handleStockClick} 
              />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
