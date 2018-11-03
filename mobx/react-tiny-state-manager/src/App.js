import React, { Component } from 'react';
import TodoList from './components/TodoList';
import { todoStore } from './stores';

class App extends Component {
  render() {
    return (
      <div className="App">
          <button onClick={()=>todoStore.put('a')}>add</button>
          <button onClick={()=>todoStore.clear()}>clear</button>
          <TodoList />
      </div>
    );
  }
}

export default App;
