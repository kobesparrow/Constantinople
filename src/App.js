import React from 'react';
import './App.css';
import Game from './components/Game/Game';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Constantinople</h1>
        <h3>Supplementary game-tracking tools for Istanbul: the Board Game</h3>
      </header>
      <section>
        <Game />
      </section>
    </div>
  );
}

export default App;
