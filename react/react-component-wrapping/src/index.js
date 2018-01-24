import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from 'redux/configureStore';

import './index.css';
import Root from 'components/Root';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Root />
    </Provider>, 
    document.getElementById('root')
);