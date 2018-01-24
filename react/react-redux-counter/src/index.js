import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import './index.css';

// Redux
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

// Store
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
