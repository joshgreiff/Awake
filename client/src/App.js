import React from 'react'
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Nav from './components/Nav';
import Home from './components/Homepage';
import Shop from './components/Shop';
import Quests from './components/Quests';
import Check from './components/Check-in';
import Communities from './components/Communities';
// import { ReactDOM } from 'react-dom/client';
// import {  BrowserRouter,  Routes,  Route, } from "react-router-dom";



const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  let component 
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/Quests":
      component = <Quests />
      break
    case "/Check":
      component = <Check /> 
      break
    case "/Communities":
      component = <Communities />
      break
    case "/Shop":
      component = <Shop />
      break
  }
  return (
    <>
      <Nav />
      {component}
    </>
  )
}

export default App;
