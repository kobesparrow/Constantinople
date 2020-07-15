import React from 'react';

const PlayerCart = ({ playerInfo, lira, currentPlayerColor, wheelbarrowExtensions }) => {

  const showCurrentPlayer = (playerColor) => {
    if (playerColor === currentPlayerColor) {
      return `${playerColor}-current`
    }
  }

  const wheelbarrowParts = () => {
    const goods = ['blue', 'red', 'green', 'yellow'];

    return goods.map(good => {
      return <div className={`player-${good}-goods`}><div></div></div>
    })
  }

  // const addWheelbarrowExtensions = () => {
  //   switch (wheelbarrowExtensions) {
  //     case 1:
  //       return <div></div>
  //     case 2:
  //       return <div></div><div></div>
  //     case 3:
  //       return <div></div><div></div><div></div>
  //     default:
  //       return null
  //   }
  // }

  const addWheelbarrowExtensions = {
    //some kind of repeat prototype within a div
    0: <div></div>,
    1: <div></div>,
    2: <div><div></div><div></div></div>,
    3: <div><div></div><div></div></div>
  }

  // const addWheelbarrowExtensions = (
  
  return <div className={ `player-cart ${ showCurrentPlayer(playerInfo.color) }` } >
      <p>{ playerInfo.turn && `First Player:` } </p>
      <p>{ playerInfo.color }</p>
      <p>{ lira } Lira</p>
      { wheelbarrowParts() }
      {/* <div className="player-blue-goods">
        <div><div></div><div></div><div></div>{ addWheelbarrowExtensions.wheelbarrowExtensions }</div>
      </div>
      <div className="player-red-goods">
        <div></div><div></div><div></div>
      </div>
      <div className="player-green-goods">
        <div></div><div></div><div></div>
      </div>
      <div className="player-yellow-goods">
        <div></div><div></div><div></div>
      </div> */}
    </div>
}

export default PlayerCart