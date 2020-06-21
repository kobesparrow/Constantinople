import React, {Component} from 'react';
import Setup from '../Setup/Setup';
import Board from '../Board/Board';

class Game extends Component {
  constructor() {
    super()

    this.state = {
      boardLayout: [],
      grandBazaar: false
    }
  }

  setBoardLayout = (boardLayout) => {
    this.setState({ boardLayout })
  }

  setBazaar = () => {
    this.setState({ grandBazaar: true })
  }

  render() {
    return <div>
      <Setup 
        setBoardLayout={ this.setBoardLayout }
        setBazaar={ this.setBazaar }
      />
      <Board 
        boardLayout={ this.state.boardLayout }
        grandBazaar={ this.state.grandBazaar }
      />
    </div>
  }
}

export default Game