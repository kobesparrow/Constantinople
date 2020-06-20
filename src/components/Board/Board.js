import React, { Component } from 'react';
import Tile from '../Tile/Tile';

class Board extends Component {


  render() {


    const tiles = this.props.boardLayout.map(tile => {
      return <Tile tileName={ tile }/>
    })

    let gameBoard



    if (this.props.boardLayout.length !== 0) {
      gameBoard = <div>{ tiles }</div>
    } else {
      gameBoard = <div>Loading...</div>
    }

    return <div>
        { gameBoard }
      </div>
  }
}

export default Board;