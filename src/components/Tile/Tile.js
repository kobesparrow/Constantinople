import React from 'react';

const Tile = (props) => {

  return <div className="game-tile">
    <div>{ props.tileName }</div>
    <div className="others-space">
      { (props.others.governor === props.tileNumber) && <div className="governor"></div> }
      { (props.others.smuggler === props.tileNumber) && <div className="smuggler"></div> }
      { (props.others.postman === props.tileNumber) && <div className="postman"></div> }
      { (props.others.coffeeTrader === props.tileNumber) && <div className="coffee-trader"></div> }
    </div>
    {/* <div className="governor"></div> */}
  </div>
}

export default Tile