import * as React from "react";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Profile name="Paul" job="Develpoer" />
        <Counter />
      </div>
    );
  }
}

export default App;
