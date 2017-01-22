import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';
import 'isomorphic-fetch';

import language from 'reducers/language';
import App from './App';

// remember to change this endpoint accordingly - here is no access to .env file
// ${HOST}:${GRAPHQL_PORT}/${GRAPHQL_ENDPOINT}
const networkInterface = createNetworkInterface('http://localhost:8000/graphql');

const client = new ApolloClient({
  networkInterface,
  queryTransformer: addTypename,
  dataIdFromObject: (result) => {
    if (result.id && result.__typename) { // eslint-disable-line no-underscore-dangle
      return result.__typename + result.id; // eslint-disable-line no-underscore-dangle
    }
    return null;
  },
  shouldBatch: true,
  initialState: window.__APOLLO_STATE__, // eslint-disable-line no-underscore-dangle
});

const store = createStore(
  combineReducers({
    language,
    apollo: client.reducer(),
  }),
  applyMiddleware(client.middleware())
);

const renderApp = () => {
  render((
    <AppContainer>
      <ApolloProvider store={store} client={client}>
        <App />
      </ApolloProvider>
    </AppContainer>
  ), document.getElementById('content'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    require('./App');

    renderApp();
  });
}
