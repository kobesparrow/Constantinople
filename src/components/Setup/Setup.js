import React, {Component} from 'react';

class Setup extends Component {


  generateBoard = () => {
    let tiles = [1,2,3,4,5,6,8,9,10,11,12];
    console.log('tiles', tiles)

    let sortedTiles = tiles.sort(() => 0.5 - Math.random());
    this.addFountain(sortedTiles)
  }

  addFountain = (sortedTiles) => {
    let fountainTileLocations = [5,6,9,10]
    console.log('sortedTiles', sortedTiles)
    
    let fountainLocation = fountainTileLocations.sort(() => 0.5 - Math.random()).pop();
    console.log('initial', fountainLocation)
    let boardLayout = sortedTiles.splice(fountainLocation, 0, 7)

    console.log('test', sortedTiles)


    // function generateRandom(min = 1, max = 100) {
    //   return Math.floor(Math.random() * (1 - 4)) + 4;
    // } 
    // let random = 
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