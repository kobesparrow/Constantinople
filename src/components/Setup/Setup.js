import React, {Component} from 'react';

class Setup extends Component {


  generateBoard = () => {
    // let tiles = [1,2,3,4,5,6,8,9,10,11,12,13,14,15,16];

    let tiles = [' Wainwright', 'Fabric Warehouse', 'Spice Warehouse', 'Fruit Warehouse', 'Post Office', 'Caravansary', 'Black Market', 'Tea House', 'Large Market', 'Small Market', 'Police Station', `Sultan's Palace`, 'Small Mosque', 'Great Mosque', 'Gemstone Dealer']

    let sortedTiles = tiles.sort(() => 0.5 - Math.random());
    this.addFountain(sortedTiles)
  }

  addFountain = (sortedTiles) => {
    let fountainTileLocations = [5,6,9,10]
    
    let fountainLocation = fountainTileLocations.sort(() => 0.5 - Math.random()).pop();
    sortedTiles.splice(fountainLocation, 0, 'Fountain');
    this.props.setBoardLayout(sortedTiles)
  }

  // checkFountain = (sortedTiles) => {
  //   let fountain = 7
  //   let fountainLocation = sortedTiles.findIndex(value => value === 7)
  //   console.log(fountainLocation)
  //   if (fountainLocation === (6 || 7 || 10 || 11)) {
  //     console.log('not an appropriate board');
  //     // this.generateBoard();



  //   } else {
  //     console.log('test is an appropriate board')
  //   }
  // }

  render() {
    return <div>
        <button onClick={ this.generateBoard }>Produce game board</button>
      </div>
  }
}

export default Setup