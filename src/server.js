import React from 'react';
import ReactDOM from 'react-dom/server';
import { RouterContext, match, createMemoryHistory } from 'react-router';
import { Provider } from 'react-redux';

import Html from './components/Html';
import routes from './routes';
import createStore from './redux';

const scripts = {
  vendor: 'assets/vendor.js',
  app: 'assets/app.js'
};

const styles = {
  codemirror: 'assets/codemirror.css',
  splitPanel: 'assets/splitPanel.css'
};

export default function(request, response, next) {
  match({ routes, location: request.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      return response.send(500, error.message);
    }

    if (redirectLocation) {
      return response.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return response.send(404);
    }

    const history = createMemoryHistory(request.url);
    const store = createStore(history);

    const html = ReactDOM.renderToStaticMarkup(
      <Provider store={store}>
        <Html styles={styles} scripts={scripts}>
          <RouterContext {...renderProps} />
        </Html>
      </Provider>
    );

    response.status(200).send(`<!doctype html>\n${html}`);
  });
}
