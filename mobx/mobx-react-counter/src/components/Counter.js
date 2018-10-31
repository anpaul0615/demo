import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

class Counter extends Component {
  render() {
    // const { counter:{ number, increase, decrease } } = this.props;
    const { number, increase, decrease } = this.props;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    );
  }
}

// export default inject('counter')( observer(Counter) );
export default inject(stores => ({
  number: stores.counter.number,
  increase: stores.counter.increase,
  decrease: stores.counter.decrease,
}))( observer(Counter) );
