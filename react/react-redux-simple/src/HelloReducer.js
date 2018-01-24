const HelloReducer = (state,action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      console.log('[HelloReducer.js] HelloReducer() :: CHANGE_TEXT call..!');
      return Object.assign({}, state, {text: action.text});
    default:
      console.log('[HelloReducer.js] HelloReducer() :: DEFAULT call..!');
      return state;
  }
}

export default HelloReducer;
