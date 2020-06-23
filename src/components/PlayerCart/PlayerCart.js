import React from 'react';

const PlayerCart = ({ playerInfo, lira }) => {
  
  return <div className="player-cart">
      <p>{ playerInfo.turn && `First Player:` } </p>
      <p>{ playerInfo.color }</p>
      <p>{ lira } Lira</p>
    </div>
}

export default PlayerCart