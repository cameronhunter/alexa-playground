import React from 'react';
import ReactDOM from 'react-dom/server';
import { RouterContext, match, createMemoryHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './containers/App';
import routes from './routes';
import createStore from './redux';

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
        <App scripts={{ vendor: '/dist/vendor.js', app: '/dist/app.js' }}>
          <RouterContext {...renderProps} />
        </App>
      </Provider>
    );

    response.status(200).send(`<!doctype html>\n${html}`);
  });
}
