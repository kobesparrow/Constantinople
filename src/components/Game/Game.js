import React, {Component} from 'react';
import Setup from '../Setup/Setup';
import Board from '../Board/Board';

class Game extends Component {
  constructor() {
    super()

    this.state = {
      boardLayout: [],
      expansion: false
    }
  }

  setBoardLayout = (boardLayout) => {
    this.setState({ boardLayout })
  }

  setExpansion = () => {
    this.setState({ expansion: true })
  }

  render() {
    return <div>
      <Setup 
        setBoardLayout={ this.setBoardLayout }
        setExpansion={ this.setExpansion}
      />
      <Board 
        boardLayout={ this.state.boardLayout }
        expansion={ this.state.expansion }
      />
    </div>
  }
}

export default Game