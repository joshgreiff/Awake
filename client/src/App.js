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
import {  BrowserRouter,  Routes,  Route, } from "react-router-dom";



const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/Shop" element= {<Shop />} />
          <Route path="/Quests" element= {<Quests />} />
          <Route path="/Check" element= {<Check />} />
          <Route path="/Communities" element= {<Communities />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
