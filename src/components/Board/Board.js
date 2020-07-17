import React, { Component } from 'react';
import Tile from '../Tile/Tile';

class Board extends Component {


  render() {
    let gameBoard

    const tiles = this.props.boardLayout.map((tile, index) => {
      return  <Tile 
                tileName={ tile.name }
                others={ this.props.others }
                tileNumber={ tile.number }
                action={ tile.action }
                players={ this.props.players }
                movePlayer={ this.props.movePlayer }
                currentPlayer={ this.props.currentPlayer }
                key={ index }
              />
    })

    let layoutStyle

    if (!this.props.expansion) {
      layoutStyle = 'tile-section-basic'
    } else {
      layoutStyle = 'tile-section-expansion'
    }

    if (this.props.boardLayout.length !== 0) {
      gameBoard = <section className={ layoutStyle }>{ tiles }</section>
    } else {
      gameBoard = <div>Loading...</div>
    }

    return <div>
      <section>
        <div>{ gameBoard }</div>
        { this.props.others.governor && <button onClick={ this.props.relocateOther } name="governor">Relocate Governor</button> }
        { this.props.others.smuggler && <button onClick={ this.props.relocateOther } name="smuggler">Relocate Smuggler</button> }
        { this.props.others.courier && <button onClick={ this.props.relocateOther } name="courier">Relocate Courier</button> }
        { this.props.others.coffeeTrader && <button onClick={ this.props.relocateOther } name="coffeeTrader">Relocate Coffee Trader</button> }
      </section>
      </div>
  }
}

export default Board;