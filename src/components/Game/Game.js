import React, {Component} from 'react';
import Setup from '../Setup/Setup';
import Board from '../Board/Board';

class Game extends Component {



  render() {
    return <div>
      <Setup />
      <Board />
    </div>
  }
}

export default Game