import * as React from "react";

interface Props {
  /* empty */
}
interface State {
  counter: number;
}

class Counter extends React.Component<Props, State> {
  public state: State = {
    counter: 0
  };

  public onIncrement = (): void => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  public onDecrement = (): void => {
    this.setState(({ counter }) => ({ counter: counter - 1 }));
  };

  public render() {
    const { onIncrement, onDecrement } = this;
    return (
      <div>
        <h1>Counter</h1>
        <h3>{this.state.counter}</h3>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
