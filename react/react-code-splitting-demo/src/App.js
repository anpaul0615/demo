import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import withSplitting from './withSplitting';
const SplitComponentWithHOC = withSplitting(() => import('./SplitComponentWithHOC'));

class App extends Component {
  state = {
    SplitComponent: null,
    visible: false
  };
  loadSplitFunction = () => {
    import('./SplitFunction').then(({ default: SplitFunction }) => {
      SplitFunction();
    });
  };
  loadSplitComponent = () => {
    import('./SplitComponent').then(({ default: SplitComponent }) => {
      this.setState({
        SplitComponent
      });
    });
  };
  loadSplitComponentWithHOC = () => {
    this.setState({
      visible: true
    });
  };
  render() {
    const { SplitComponent } = this.state;
    const { visible } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>React Code Splitting Demo</p>

          <button onClick={this.loadSplitFunction}>
            Load Split-Function
          </button>
          <button onClick={this.loadSplitComponent}>
            Load Split-Component
          </button>
          <button onClick={this.loadSplitComponentWithHOC}>
            Load Split-Component With HOC
          </button>

          {SplitComponent && <SplitComponent /> }
          {visible && <SplitComponentWithHOC /> }
          
        </header>
      </div>
    );
  }
}

export default App;
