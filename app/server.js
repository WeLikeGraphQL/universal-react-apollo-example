/* eslint-disable no-console, import/no-duplicates */
import React from 'react';
import ReactDOM from 'react-dom/server';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { getDataFromTree } from 'react-apollo/lib';
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
    networkInterface: createNetworkInterface({ uri: apiUrl }, {
      credentials: 'same-origin',
      headers: req.headers
    })
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

  getDataFromTree(component).then(() => {
    const content = ReactDOM.renderToString(component);
    const initialState = client.store.getState()[client.reduxRootKey].data;

    const html = <Html content={content} state={initialState} />;

    res.status(200);
    res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`);
    res.end();
  }).catch(e => console.error('RENDERING ERROR:', e));
}

