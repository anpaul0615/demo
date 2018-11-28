import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import MessageStore from './stores/message';
import App from './components/App';

/* eslint-disable import/order, import/no-extraneous-dependencies */
import DevTools from 'mobx-react-devtools';

const messageStore = new MessageStore();
const stores = {
  messageStore,
};

render(
  <div>
    <Provider {...stores}>
      <App />
    </Provider>
    {process.env.NODE_ENV === 'development' && <DevTools />}
  </div>,
  global.document.getElementById('app'),
);

if (module.hot) module.hot.accept();
