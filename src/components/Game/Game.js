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
      // players: 2,
      others: {},
      players: [],
      currentPlayer: {},
      displaySetup: true
    }
  }

  //BOARD LAYOUT
  setBoardLayout = (boardLayout) => {
    this.setState({ boardLayout, displaySetup: false })
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
    // this.setFirstPlayer(players)
    this.setState({ players, currentPlayer: players[0] })
  }

  instantiatePlayer = (color) => {
    return {
      color: color,
      tile: 7,
      assistants: [null, null, null, null],
      wheelbarrowExtensions: 0
    }
  }

  // setFirstPlayer = (players) => {
  //   players[0] = {...players[0], turn: true}
  //   this.setState({ players })
  // }

  movePlayer = (moveTo) => {
    let updatedAssistants = this.assistantCheck(moveTo)
    let updatedPlayer = {
      ...this.state.currentPlayer, 
      tile: moveTo, 
      assistants: updatedAssistants }

    let playerToReplace = this.state.players.findIndex(player => player.color === updatedPlayer.color);
    let players = this.state.players
    players[playerToReplace] = updatedPlayer
    let currentPlayer = this.setNextPlayer(playerToReplace)
    
    this.setState({ players, currentPlayer })
  }

  setNextPlayer = (currentIndex) => {
    let nextIndex
    if (currentIndex + 1 === this.state.players.length) {
      nextIndex = 0
    } else {
      nextIndex = currentIndex + 1
    }
    
    return this.state.players[nextIndex]
  }

  //ASSISTANTS
  assistantCheck = (moveTo) => {
    let assistants = this.state.currentPlayer.assistants
    if (!assistants.includes(moveTo)) {
      //might want to break this out into its own func called dropOffAssistant
      return assistants.reduce((acc, assistant) => {
        if (!acc.includes(moveTo) && assistant === null) {
          acc.push(moveTo)
        } else {
          acc.push(assistant)
        }
        return acc;
      }, [])
    } else {
      //might want to break this out into its own func called pickUpAssistant
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
    let gameArea

    if (this.state.displaySetup) {
      gameArea = <div>
          <Setup 
            setBoardLayout={ this.setBoardLayout }
            setExpansion={ this.setExpansion}
            setOthers={ this.setOthers }
            diceRoll={ this.diceRoll }
            setPlayers={ this.setPlayers }
          />
        </div>
    } else {
      gameArea = <div>
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
            currentPlayer={ this.state.currentPlayer }
          />
        </div>
    }

    return <div>
      { gameArea }
      {/* <Setup 
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
      /> */}
    </div>
  }
}

export default Game