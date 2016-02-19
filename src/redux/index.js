import { syncHistory } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';

import reducer from './modules';

export default (history) => createStore(
  reducer,
  applyMiddleware(
    syncHistory(history)
  )
);
