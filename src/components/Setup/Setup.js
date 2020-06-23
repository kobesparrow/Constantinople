import React, {Component} from 'react';
import Constantinople from '../../data-set';

class Setup extends Component {
  constructor() {
    super()

    this.state = {
      mocha: false,
      letters: false,
      grandBazaar: false,
      othersLocations: {},
      players: []
    }
  }

  //BOARD SETUP

  generateBoard = () => {
    let tiles = Constantinople.tiles.base
    
    console.log(tiles)

    tiles = this.addExpansions(tiles)
    
    let sortedTiles = tiles.sort(() => 0.5 - Math.random());
    this.addFountain(sortedTiles)
    this.setOthersLocations()
    this.props.setPlayers(this.state.players)
  }

  addExpansions = (tiles) => {
    if (this.state.mocha) {
      tiles = tiles.concat(Constantinople.tiles.mocha)
      this.props.setExpansion(true)
    }

    if (this.state.letters) {
      tiles = tiles.concat(Constantinople.tiles.letters)
      this.props.setExpansion(true)
    }

    if (this.state.mocha && this.state.letters) {
      tiles= tiles.concat(Constantinople.tiles.special)
    }

    if (!this.state.mocha && ! this.state.letters) {
      this.props.setExpansion(false)
    } 

    return tiles
  };

  addFountain = (sortedTiles) => {
    let fountainTileLocations
    
    if (this.state.mocha && this.state.letters) {
      fountainTileLocations = [12]
    } else if (this.state.mocha || this.state.letters) {
      fountainTileLocations = [6, 7,8,11,12,13]
    } else {
      fountainTileLocations = [5,6,9,10]
    }
    
    let fountainLocation = fountainTileLocations.sort(() => 0.5 - Math.random()).pop();
    sortedTiles.splice(fountainLocation, 0, Constantinople.tiles.fountain[0]);
    console.log('sortedTiles', sortedTiles)
    this.props.setBoardLayout(sortedTiles)
  }

  //OTHERS LOCATIONS
  setOthersLocations = () => {
    let othersLocations

    if (this.state.mocha && this.state.letters) {
      othersLocations = {
        governor: this.props.diceRoll(),
        smuggler: this.props.diceRoll(),
        courier: this.props.diceRoll(),
        coffeeTrader: this.props.diceRoll()
      }
    } else if (this.state.mocha) {
      othersLocations = {
        governor: this.props.diceRoll(),
        smuggler: this.props.diceRoll(),
        coffeeTrader: this.props.diceRoll()
      }
    } else if (this.state.letters) {
      othersLocations = {
        governor: this.props.diceRoll(),
        smuggler: this.props.diceRoll(),
        courier: this.props.diceRoll()
      }
    } else {
      othersLocations = {
        governor: this.props.diceRoll(),
        smuggler: this.props.diceRoll()
      }
    }

    this.props.setOthers(othersLocations)
  }

  //BUTTONS

  adjustExpansionSelection = (event) => {
    this.setState({ [event.target.id]: !this.state[event.target.id] })
  }

  adjustPlayers = (event) => {
    let status = this.state.players[event.currentTarget.id] ? false : true
    let players = {...this.state.players, [event.currentTarget.id]: status }
    this.setState({ players })
  }


  //HELPER FUNCTIONS
  // generateRandom = (min, max) => {
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }

  render() {
    return <div>
        <section>
          <form>
            <div>
              <p>Players:</p>
              <input type="checkbox" id="yellow" name="player" onClick={ this.adjustPlayers } />
              <label htmlFor="yellow">Yellow</label>
              <input type="checkbox" id="green" name="player" onClick={ this.adjustPlayers } />
              <label for="green">Green</label>
              <input type="checkbox" id="red" name="player" onClick={ this.adjustPlayers } />
              <label for="red">Red</label>
              <input type="checkbox" id="white" name="player" onClick={ this.adjustPlayers } />
              <label for="white">White</label>
              <input type="checkbox" id="blue" name="player" onClick={ this.adjustPlayers } />
              <label for="blue">Blue</label>
            </div>
            <div>
              <p>Add Expansions:</p>
              <input type="checkbox" id="mocha" name="expansion" onClick={ this.adjustExpansionSelection } />
              <label for="mocha">Mocha and Baksheesh</label>
              <input type="checkbox" id="letters" name="expansion" onClick={ this.adjustExpansionSelection } />
              <label for="letters">Seals and Letters</label>
            </div>  
          </form>
        </section>
        <button onClick={ this.generateBoard }>Produce game board</button>
      </div>
  }
}

export default Setup