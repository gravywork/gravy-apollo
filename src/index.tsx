import React from 'react';
import ReactDOM from 'react-dom';
import { Grommet, grommet } from 'grommet'
import theme from './theme'

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Pages from './pages';
import Authentication from './pages/Authentication'
import Login from './pages/Login';
import { typeDefs } from './resolvers'

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'https://dog-graphql-api.glitch.me/graphql',
    headers: {
      authorization: localStorage.getItem('token'),
      'client-name': 'Gravy',
    },
  }),
  typeDefs,
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
    cartItems: [],
  },
});

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const IsLoggedIn = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <Pages /> : <Authentication />;
}

ReactDOM.render(

  <ApolloProvider client={client}>
    <Grommet theme={theme} full>
      <IsLoggedIn />
    </Grommet>
  </ApolloProvider>,
  document.getElementById('root'),
);
