import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './component/Timer/Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Timer time={{ duration: 10, shortBreak:2 }}/>
      </div>
    );
  }
}

export default App;
