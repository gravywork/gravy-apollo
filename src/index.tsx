import React from 'react';
import ReactDOM from 'react-dom';
import { Grommet, grommet } from 'grommet'

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import theme from './theme'
import { typeDefs } from './resolvers'

import Pages from './pages';
import Authentication from './pages/Authentication'

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://graphy-qa.herokuapp.com/graphql',
    headers: {
      authorization: localStorage.getItem('token'),
      'X-Gravy-Refresh': localStorage.getItem('refreshToken'),
      'client-name': 'Gravy',
    },
  }),
  typeDefs,
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
    user: {
      email: '',
      firstName: '',
      id: '',
      lastName: '',
      __typename: ''
    }
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
