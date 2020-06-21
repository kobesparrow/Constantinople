import React, {Component} from 'react';
import Setup from '../Setup/Setup';
import Board from '../Board/Board';

class Game extends Component {
  constructor() {
    super()

    this.state = {
      boardLayout: [],
      expansion: false,
      players: 2,
      others: {}
    }
  }

  setBoardLayout = (boardLayout) => {
    this.setState({ boardLayout })
  }

  setExpansion = (yesOrNo) => {
    this.setState({ expansion: yesOrNo })
  }

  setOthers = (others) => {
    this.setState({ others })
  }

  render() {
    return <div>
      <Setup 
        setBoardLayout={ this.setBoardLayout }
        setExpansion={ this.setExpansion}
        setOthers={ this.setOthers }
      />
      <Board 
        boardLayout={ this.state.boardLayout }
        expansion={ this.state.expansion }
        others={ this.state.others }
      />
    </div>
  }
}

export default Game