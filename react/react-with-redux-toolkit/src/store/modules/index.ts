import { combineReducers } from '@reduxjs/toolkit';

import textReducer from './text';
import { reducer as text2Reducer } from './text2';

export default combineReducers({
  text: textReducer,
  text2: text2Reducer,
});
