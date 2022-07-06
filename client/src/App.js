import React from 'react'
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Homepage from './components/Homepage';
import Nav from './components/Nav';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Homepage></Homepage>
      </main>
    </div>
  );
}

export default App;
