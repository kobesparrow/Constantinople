import React from 'react';

const PlayerCart = ({ playerInfo, lira, currentPlayerColor }) => {

  const showCurrentPlayer = (playerColor) => {
    if (playerColor === currentPlayerColor) {
      return `${playerColor}-current`
    }
  }
  
  return <div className={ `player-cart ${ showCurrentPlayer(playerInfo.color) }` } >
      <p>{ playerInfo.turn && `First Player:` } </p>
      <p>{ playerInfo.color }</p>
      <p>{ lira } Lira</p>
      <div className="player-gems">
        <div></div><div></div><div></div>
      </div>
      <div className="player-fabric">
        <div></div><div></div><div></div>
      </div>
      <div className="player-spices">
        <div></div><div></div><div></div>
      </div>
      <div className="player-fruits">
        <div></div><div></div><div></div>
      </div>
    </div>
}

export default PlayerCart