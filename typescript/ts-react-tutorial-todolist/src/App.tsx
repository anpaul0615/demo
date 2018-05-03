import * as React from "react";
import TodoList from "./components/TodoList";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
