import React, {Component} from 'react';
import Setup from '../Setup/Setup';
import Board from '../Board/Board';

class Game extends Component {
  constructor() {
    super()

    this.state = {
      boardLayout: []
    }
  }

  setBoardLayout = (boardLayout) => {
    this.setState({ boardLayout })
  }

  render() {
    return <div>
      <Setup 
        setBoardLayout={ this.setBoardLayout }
      />
      <Board 
        boardLayout={ this.state.boardLayout }
      />
    </div>
  }
}

export default Game