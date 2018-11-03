import React, { Component } from 'react';
import Todo from './Todo';

import { todoStore } from '../stores';

class TodoList extends Component {

  constructor() {
    super();
    console.log('components.TodoList :: constructor() called!!');

    todoStore.registerReaction(this, Component.prototype.forceUpdate);

    const _this = this;
    const refSetState = this.setState;
    this.setState = (...rest) =>{
      console.log('***setState called!!!');
      return refSetState.call(_this, ...rest);
    };

    const refForceUpdate = this.forceUpdate;
    this.forceUpdate = (...rest) =>{
      console.log('***forceUpdate called!!!');
      return refForceUpdate.call(_this, ...rest);
    };

    const refRender = this.render;
    this.render = (...rest) => {
      console.log('***render called!!!');
      return refRender.call(_this, ...rest);
    };
  }

  componentWillReceiveProps() {
    console.log('components.TodoList :: componentWillReceiveProps() called!!');
  }

  componentDidUpdate() {
    console.log('components.TodoList :: componentDidUpdate() called!!');
  }

  componentWillMount() {
    console.log('components.TodoList :: componentWillMount() called!!');
  }

  componentDidMount() {
    console.log('components.TodoList :: componentDidMount() called!!');
  }
  render() {
    console.log('components.TodoList :: render() called!!');

    return (
      <div className="Hello">
        {todoStore.todos.map(t => <Todo key={t} todo={t} />)}
      </div>
    );
  }
}

export default TodoList;
