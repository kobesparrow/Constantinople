import React from 'react';
import PlayerCart from '../PlayerCart/PlayerCart';

const Players = ({ players, currentPlayer }) => {

  const playerCarts = players.map((player, index) => {
    return  <PlayerCart 
              playerInfo={ player } 
              lira={index+2} 
              key={ index }
              currentPlayerColor={ currentPlayer.color }
              wheelbarrowExtensions={ currentPlayer.wheelbarrowExtensions }
            />
  })

  return <section className="player-section">{ playerCarts}</section>
}

export default Players