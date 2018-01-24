import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import Header from './components/Header';
import PostContainer from './containers/PostContainer';

ReactDOM.render(
  <div className="App">
    <Header/>
    <PostContainer/>
  </div>,
  document.getElementById('root')
);
