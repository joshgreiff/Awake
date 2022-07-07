import React from 'react'
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import Shop from './components/Shop';
import { useState } from 'react';
import { ReactDOM } from 'react-dom/client';
import {  BrowserRouter,  Routes,  Route, } from "react-router-dom";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return <Nav />
}

export default App;
