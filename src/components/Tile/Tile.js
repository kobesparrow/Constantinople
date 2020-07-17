import React from 'react';

const Tile = (props) => {

  let tileNumber = props.tileNumber

  //FUNCTIONS
  const calculateAssistants = (assistants) => {
    return assistants.filter(assistant => assistant === null).length
  }

  const testFunc = () => {
    console.log('testing stuff', props.action())
  }

  // const testObj = {
  //   name: 'Wainright',
  //   action: function() {
  //     console.log('this is the test right now')
  //   }
  // }


  //ELEMENT CREATORS
  let players = props.players.map((player, index) => {
    // if (props.currentPlayer.tile === props.tileNumber) {
    //   console.log(`the current player has arrived on the ${props.tileName}`)
    // }
    return player.tile === props.tileNumber && <div className={ `${player.color}-player` } key={ index } >{ calculateAssistants(player.assistants) }</div>
  })

  let assistants = props.players.map((player, index) => {
    return player.assistants.includes(tileNumber) && <div className={ `${player.color}-assistant` } key={ index } ></div>
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
    <button onClick={testFunc}>Test Action Button</button>
  </button>
}

export default Tile;
