import React from 'react';
import PropTypes from 'prop-types';
import './CounterList.css';

import Counter from './Counter';

const CounterList = ({counters,onIncrement,onDecrement,onSetColor})=>{
  return (
    <div className='CounterList'>
      {
        counters.map((counter,index)=>{
            return (
              <Counter
                key={index}
                index={index}
                {...counter}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor}
                />
            );
          })
      }
    </div>
  );
};
CounterList.propTypes = {
  counter: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    number: PropTypes.number
  })),
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};
CounterList.defaultProps = {
  counters: [],
  onIncrement: ()=>{ console.log('onIncrement not defined'); },
  onDecrement: ()=>{ console.log('onDecrement not defined'); },
  onSetColor: ()=>{ console.log('onSetColor not defined'); },
};

export default CounterList;
