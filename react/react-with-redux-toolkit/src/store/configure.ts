import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './modules';

export default () => {
  const store = configureStore({ reducer: rootReducer });
  return store;
}
