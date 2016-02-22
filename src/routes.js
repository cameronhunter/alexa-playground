import React from 'react';
import { Route } from 'react-router';
import Playground from './components/Playground';

export default (
  <Route path="*" component={Playground} />
);
