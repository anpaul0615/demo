import React, { Component } from 'react';

// import Counter from '../components/Counter';
import CounterContainer from './CounterContainer';

class App extends Component {
  render(){
    return(
      <div>
        Counter
        <hr/>
        <CounterContainer />
      </div>
    )
  }
}

export default App;
