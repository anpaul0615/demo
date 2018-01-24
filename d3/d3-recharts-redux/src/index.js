import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Logo from './components/Logo';
import BarChartContainer from './containers/BarChartContainer';
import LineChartContainer from './containers/LineChartContainer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Logo/>
      <BarChartContainer/>
      <LineChartContainer/>
    </div>
  </Provider>,
  document.getElementById('root')
);
