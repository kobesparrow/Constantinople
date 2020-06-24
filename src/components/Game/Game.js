import React, {Component} from 'react';
import Setup from '../Setup/Setup';
import Board from '../Board/Board';
import Players from '../Players/Players';

class Game extends Component {
  constructor() {
    super()

    this.state = {
      boardLayout: [],
      expansion: false,
      players: 2,
      others: {},
      players: [],
      currentPlayer: {}
    }
  }

  //BOARD LAYOUT
  setBoardLayout = (boardLayout) => {
    this.setState({ boardLayout })
  }

  setExpansion = (yesOrNo) => {
    this.setState({ expansion: yesOrNo })
  }

  //OTHERS
  setOthers = (others) => {
    this.setState({ others })
  }

  relocateOther = (event) => {
    let others = {...this.state.others, [event.currentTarget.name]: this.diceRoll() }
    this.setState({ others })
  }

  //PLAYERS
  setPlayers = (playerColors) => {
    let players = []
    Object.keys(playerColors).forEach(color => {
      if (playerColors[color]) {
        players.push(this.instantiatePlayer(color))
      }
    })
    this.setFirstPlayer(players)
    this.setState({ players, currentPlayer: players[0] })
  }

  instantiatePlayer = (color) => {
    return {
      color: color,
      tile: 7,
      assistants: [null, null, null, null]
    }
  }

  setFirstPlayer = (players) => {
    players[0] = {...players[0], turn: true}
    this.setState({ players })
  }

  movePlayer = (moveTo) => {
    let updatedAssistants = this.assistantCheck(moveTo)
    console.log('test please', updatedAssistants)
    let updatedPlayer = {
      ...this.state.currentPlayer, 
      tile: moveTo, 
      assistants: updatedAssistants }

    let players = this.state.players
    players.push(updatedPlayer)
    players.shift()
    this.setState({ players, currentPlayer: players[0]})
  }

  //ASSISTANTS
  assistantCheck = (moveTo) => {
    let assistants = this.state.currentPlayer.assistants
    if (!assistants.includes(moveTo)) {
      return assistants.reduce((acc, assistant) => {
        if (!acc.includes(moveTo) && assistant === null) {
          acc.push(moveTo)
        } else {
          acc.push(assistant)
        }
        return acc;
      }, [])
    } else {
      return assistants.reduce((acc, tileNumber) => {
        if (moveTo === tileNumber) {
          acc.push(null)
        } else {
          acc.push(tileNumber)
        }
        return acc;
      }, [])
    }
  }

  //HELPER FUNCTIONS
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
        setPlayers={ this.setPlayers }
      />
      <Board 
        boardLayout={ this.state.boardLayout }
        expansion={ this.state.expansion }
        others={ this.state.others }
        diceRoll={ this.diceRoll }
        relocateOther={ this.relocateOther }
        players={ this.state.players }
        movePlayer={ this.movePlayer }
      />
      <Players 
        players={ this.state.players }
      />
    </div>
  }
}

export default Game