import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './components/Header';
import PostPage from './pages/PostPage';
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <div className='App'>
      <Header/>
      <PostPage/>
    </div>
  </Provider>,
  document.getElementById('root')
);
