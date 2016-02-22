import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Playground from './containers/Playground';

export default (
  <Route path="*" component={Playground} />
);
