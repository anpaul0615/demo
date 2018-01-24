import { combineReducers } from 'redux';
import PostReducer from './PostReducer';

const rootReducer = combineReducers({
  PostState: PostReducer
});

export default rootReducer;
