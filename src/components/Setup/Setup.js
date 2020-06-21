import React, {Component} from 'react';

class Setup extends Component {
  constructor() {
    super()

    this.state = {
      mocha: false,
      letters: false,
      grandBazaar: false
    }
  }

  generateBoard = () => {
    let tiles = [' Wainwright', 'Fabric Warehouse', 'Spice Warehouse', 'Fruit Warehouse', 'Post Office', 'Caravansary', 'Black Market', 'Tea House', 'Large Market', 'Small Market', 'Police Station', `Sultan's Palace`, 'Small Mosque', 'Great Mosque', 'Gemstone Dealer']

    tiles = this.addExpansions(tiles)
    
    let sortedTiles = tiles.sort(() => 0.5 - Math.random());
    this.addFountain(sortedTiles)
  }


  addExpansions = (tiles) => {
    if (this.state.mocha) {
      tiles = tiles.concat(['Roasting Plant', 'Tavern', 'Coffee House', 'Guild Hall'])
      this.props.setExpansion()
    }

    if (this.state.letters) {
      tiles = tiles.concat(['Kiosk', 'Auction House', 'Secret Society', 'Embassy'])
      this.props.setExpansion()
    }

    if (this.state.mocha && this.state.letters) {
      tiles= tiles.concat(['Catacombs'])
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

    // if 
    // let fountainTileLocations = [5,6,9,10]
    
    let fountainLocation = fountainTileLocations.sort(() => 0.5 - Math.random()).pop();
    sortedTiles.splice(fountainLocation, 0, 'Fountain');
    this.props.setBoardLayout(sortedTiles)
  }

  adjustExpansionSelection = (event) => {
    this.setState({ [event.target.id]: !this.state[event.target.id] })
  }

  render() {
    return <div>
        <section>
          <p>Add Expansions:</p>
          <form>
            <input type="checkbox" id="mocha" name="expansion" onClick={ this.adjustExpansionSelection } />
            <label for="mocha">Mocha and Baksheesh</label>
            <input type="checkbox" id="letters" name="expansion" onClick={ this.adjustExpansionSelection } />
            <label for="letters">Seals and Letters</label>
            
          </form>
        </section>
        <button onClick={ this.generateBoard }>Produce game board</button>
      </div>
  }
}

export default Setup