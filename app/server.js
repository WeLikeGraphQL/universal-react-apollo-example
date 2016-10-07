/* eslint no-console: 0 */
import React from 'react';
import ReactDOM from 'react-dom/server';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { getDataFromTree } from 'react-apollo/server';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import 'isomorphic-fetch';
import dotenv from 'dotenv';

import language from 'reducers/language';
import App from 'App';
import Html from 'Html';

dotenv.config();
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || 'graphql';
const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 8000;
const HOST = process.env.HOST || 'http://localhost';
const apiUrl = `${HOST}:${GRAPHQL_PORT}/${GRAPHQL_ENDPOINT}`;

export default function render(req, res) {
  const client = new ApolloClient({
    ssrMode: true,
    ssrForceFetchDelay: 2000,
    networkInterface: createNetworkInterface(apiUrl, {
      credentials: 'same-origin',
      headers: req.headers
    }),
    shouldBatch: true
  });

  const store = createStore(
    combineReducers({
      language,
      apollo: client.reducer()
    }),
    applyMiddleware(client.middleware())
  );

  const component = (
    <ApolloProvider store={store} client={client}>
      <App />
    </ApolloProvider>
  );

  getDataFromTree(component).then((context) => {
    const content = ReactDOM.renderToString(component);
    res.status(200);

    const html = <Html content={content} state={context.store.getState()} />;

    res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`);
    res.end();
  }).catch(e => console.error('RENDERING ERROR:', e));
}

