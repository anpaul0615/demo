import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css'

const Counter = ({number,color,index,onIncrement,onDecrement,onSetColor})=>{
  return (
    <div
      className='Counter'
      onClick={()=>{
        onIncrement(index);
      }}
      onContextMenu={(e)=>{
        e.preventDefault();
        onDecrement(index);
      }}
      onDoubleClick={()=>{
        onSetColor(index);
      }}
      style={{backgroundColor: color}}>
      {number}
    </div>
  );
};
Counter.PropTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onDoubleClick: PropTypes.func
}
Counter.defaultProps = {
  index: 0,
  number: 0,
  color: 'black',
  onIncrement: ()=>{ console.warn('onIncrement not defined..!') },
  onDecrement: ()=>{ console.warn('onDecrement not defined..!') },
  onDoubleClick: ()=>{ console.warn('onDoubleClick not defined..!') }
}

export default Counter;
