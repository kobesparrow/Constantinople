import React, { Component } from 'react';
import Tile from '../Tile/Tile';

class Board extends Component {




  render() {
    let gameBoard

    const tiles = this.props.boardLayout.map((tile, index) => {
      return  <Tile 
                tileName={ tile }
                others={ this.props.others }
                // key={index}
                tileNumber={ index }
                // id={ tile.index }
                // key={ tile.index }
              />
    })

    let layoutStyle

    if (!this.props.expansion) {
      console.log('tile')
      layoutStyle = 'tile-section'
    } else {
      console.log('bazaar')
      layoutStyle = 'grand-bazaar'
    }

    if (this.props.boardLayout.length !== 0) {
      gameBoard = <section className={ layoutStyle }>{ tiles }</section>
    } else {
      gameBoard = <div>Loading...</div>
    }

    return <div>
      <section>
        <div>{ gameBoard }</div>
        {/* <p>Governor:{ this.props.others.governor }</p> */}
        {/* { this.props.others.governor && <p>Governor: { this.props.others.governor }</p> }
        { this.props.others.smuggler && <p>Smuggler: { this.props.others.smuggler }</p> }
        { this.props.others.postman && <p>Postman: { this.props.others.postman }</p> }
        { this.props.others.coffeeTrader && <p>Coffee Trader: { this.props.others.coffeeTrader }</p> } */}
      </section>

      </div>
  }
}

export default Board;