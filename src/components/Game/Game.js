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

  relocateOther = (event) => {
    let others = {...this.state.others, [event.currentTarget.name]: this.diceRoll() }
    console.log(others)
    this.setState({ others })
  }

  diceRoll = () => {
    let dieOne = Math.floor(Math.random() * (6 - 1)) + 1;
    let dieTwo = Math.floor(Math.random() * (6 - 1)) + 1;

    return dieOne + dieTwo
  }

  render() {
    return <div>
      <Setup 
        setBoardLayout={ this.setBoardLayout }
        setExpansion={ this.setExpansion}
        setOthers={ this.setOthers }
        diceRoll={ this.diceRoll }
      />
      <Board 
        boardLayout={ this.state.boardLayout }
        expansion={ this.state.expansion }
        others={ this.state.others }
        diceRoll={ this.diceRoll }
        relocateOther={ this.relocateOther }
      />
    </div>
  }
}

export default Game