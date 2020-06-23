import React from 'react';
import PlayerCart from '../PlayerCart/PlayerCart';

const Players = ({ players }) => {

  const playerCarts = players.map((player, index) => {
    return  <PlayerCart 
              playerInfo={ player } 
              lira={index+2} 
            />
  })

  return <section className="player-section">{ playerCarts}</section>
}

export default Players