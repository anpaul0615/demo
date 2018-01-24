import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import PostPage from './pages/PostPage';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div className='App'>
      <Header/>
      <PostPage/>
    </div>
  </Provider>,
  document.getElementById('root')
);
