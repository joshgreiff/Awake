import React from 'react'
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Homepage from './components/Homepage';
import Landing from './components/Landing';
import {  BrowserRouter,  Routes,  Route, } from "react-router-dom";


const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App () {
 
    return (
        <ApolloProvider client={client}>
    < Landing />
    </ApolloProvider>
    
    )
}   

export default App;
