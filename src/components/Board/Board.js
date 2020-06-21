import React, { Component } from 'react';
import Tile from '../Tile/Tile';

class Board extends Component {




  render() {
    let gameBoard

    const tiles = this.props.boardLayout.map(tile => {
      return <Tile tileName={ tile }/>
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
        { gameBoard }
      </div>
  }
}

export default Board;