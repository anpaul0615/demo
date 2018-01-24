import { createStore, applyMiddleware, combineReducers } from 'redux';
import Post from './modules/Post';

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger');
  const loggerMiddleware = createLogger(); // initialize logger
  middlewares.push(loggerMiddleware);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const reducer = combineReducers({
  Post
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);

export default configureStore;