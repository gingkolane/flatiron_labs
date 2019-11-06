import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    show: true
  }

  toggleOnClick = (event) => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {

    const hp = this.props.stats.filter(stat => stat.name ==="hp")
    
    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggleOnClick}>
          {this.state.show ?
            <div ><img src={this.props.sprites.front} alt="oh no!" /></div>
            :
            <div ><img src={this.props.sprites.back} alt="oh no!" /></div> }
          </div>

          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp[0].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}


export default PokemonCard
