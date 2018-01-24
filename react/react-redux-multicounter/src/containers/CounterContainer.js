import Counter from '../components/CounterList';
import * as actions from '../actions';
import { getRandomColor } from '../services';

import { connect } from 'react-redux';

const mapStateToProps = (state)=>{
  return {
    counters: state.counters
  };
};
const mapDispatchToProps = (dispatch)=>{
  return {
    onIncrement: (index)=> {
      dispatch(actions.increment(index))
    },
    onDecrement: (index)=> {
      dispatch(actions.decrement(index))
    },
    onSetColor: (index)=> {
      const color = getRandomColor(index);
      dispatch(actions.setColor(index, color));
    }
  };
}
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
