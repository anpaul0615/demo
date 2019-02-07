import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Counter';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>React Hooks Demo</p>

          <Counter />
          <Form />

        </header>
      </div>
    );
  }
}

export default App;
