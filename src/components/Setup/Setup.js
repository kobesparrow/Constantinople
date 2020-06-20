import React, {Component} from 'react';

class Setup extends Component {


  testFunc = () => {
    console.log('test')
  }

  render() {
    return <div>
        <button onClick={ this.testFunc }>Produce game board</button>
      
      </div>
  }
}

export default Setup