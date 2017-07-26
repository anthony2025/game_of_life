import React, { Component } from 'react';
import BoardContainer from './containers/BoardContainer'
import ControlsContainer from './containers/ControlsContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Game of Life</h1>
        <BoardContainer />
        <ControlsContainer />
      </div>
    );
  }
}

export default App;
