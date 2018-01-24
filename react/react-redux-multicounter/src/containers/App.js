import React, { Component } from 'react';

import Buttons from '../components/Buttons';
import CounterContainer from '../containers/CounterContainer';
import { getRandomColor } from '../services';
import * as actions from '../actions';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Buttons
          onCreate={this.props.onCreate}
          onRemove={this.props.onRemove}
          />
        <CounterContainer/>
      </div>
    )
  }
}

const mapStateToProps = null;
const mapDispatchToProps = (dispatch)=>{
  return {
    onCreate: ()=>{ dispatch(actions.create(getRandomColor())); },
    onRemove: ()=>{ dispatch(actions.remove()); }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
