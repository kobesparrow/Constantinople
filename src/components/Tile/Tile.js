import React from 'react';

const Tile = (props) => {

  let players = props.players.map((player, index) => {
    return props.players[index].tile === props.tileNumber && <div className={`${player.color}-player`} ></div>
  })

  let tileNumber = props.tileNumber

  return <button onClick={ () => props.movePlayer(tileNumber) } className="game-tile">
    <div>{ props.tileNumber } — { props.tileName }</div>
    <div className="others-space">
      { (props.others.governor === props.tileNumber) && <div className="governor"></div> }
      { (props.others.smuggler === props.tileNumber) && <div className="smuggler"></div> }
      { (props.others.courier === props.tileNumber) && <div className="courier"></div> }
      { (props.others.coffeeTrader === props.tileNumber) && <div className="coffee-trader"></div> }
    </div>
    <div className="players-space">
      { players }
    </div>
  </button>
}

export default Tile

// [green, red, white]