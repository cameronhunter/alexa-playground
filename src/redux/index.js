import { createStore, applyMiddleware } from 'redux';

import reducer from './modules';

export default (history) => createStore(
  reducer,
  applyMiddleware()
);
