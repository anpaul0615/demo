import * as types from '../constants/ActionTypes';

const initialState = {
  counters: [
    {
      color: 'black',
      number: 0
    }
  ]
};

const counter = (state=initialState,action)=>{
  switch(action.type){
    case types.CREATE:
        return {
          counters: [
            ...state.counters,
            {
              color: action.color,
              number: 0
            }
          ]
        };
    case types.REMOVE:
        return {
          counters: state.counters.slice(0, state.counters.length-1)
        };
    case types.INCREMENT:
        return {
          counters: [
            ...state.counters.slice(0, action.index),
            {
              ...state.counters[action.index],
              number: state.counters[action.index].number+1
            },
            ...state.counters.slice(action.index+1, state.counters.length)
          ]
        };
    case types.DECREMENT:
        return {
          counters: [
            ...state.counters.slice(0, action.index),
            {
              ...state.counters[action.index],
              number: state.counters[action.index].number-1
            },
            ...state.counters.slice(action.index+1, state.counters.length)
          ]
        };
    case types.SET_COLOR:
        return {
          counters: [
            ...state.counters.slice(0, action.index),
            {
              ...state.counters[action.index],
              color: action.color
            },
            ...state.counters.slice(action.index+1, state.counters.length)
          ]
        };
    default:
        return state;
  }
};

export default counter;
