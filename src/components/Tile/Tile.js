import React from 'react';

const Tile = (props) => {

  let tileNumber = props.tileNumber

  let players = props.players.map((player, index) => {
  return props.players[index].tile === props.tileNumber && <div className={`${player.color}-player`} >{player.assistants.length}</div>
  })

  let assistants = props.players.map((player, index) => {
    return props.players[index].assistants.includes(tileNumber) && <div className={`${player.color}-assistant`} ></div>
  })


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
    <div className="assistants-space">
      { assistants }
    </div>
  </button>
}

export default Tile;
