import React from 'react';

const PlayerCart = (props) => {
  
  return <div className="player-cart">
      <p>{props.playerInfo.color}</p>
      <p>{props.lira} Lira</p>
    </div>
}

export default PlayerCart