import React, { Component } from 'react';
import Tile from '../Tile/Tile';

class Board extends Component {




  render() {
    let gameBoard

    const tiles = this.props.boardLayout.map(tile => {
      return <Tile tileName={ tile }/>
    })

    let gameBoardStyle

    if (!this.props.grandBazaar) {
      console.log('tile')
      gameBoardStyle = 'tile-section'
    } else {
      console.log('bazaar')
      gameBoardStyle = 'grand-bazaar'
    }

    if (this.props.boardLayout.length !== 0) {
      gameBoard = <section className={ gameBoardStyle }>{ tiles }</section>
    } else {
      gameBoard = <div>Loading...</div>
    }

    return <div>
        { gameBoard }
      </div>
  }
}

export default Board;