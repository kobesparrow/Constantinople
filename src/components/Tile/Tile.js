import React from 'react';

const Tile = (props) => {

  return <div className="game-tile">
    <div>{ props.tileName }</div>
  </div>
}

export default Tile