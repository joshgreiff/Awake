import React from 'react'
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'


import Homepage from './components/Homepage';
import Landing from './components/Landing';

import Nav from './components/Nav';
import Home from './components/Homepage';
import Shop from './components/Shop';
import Quests from './components/Quests';
import Check from './components/Check-in';
import Communities from './components/Communities';
import Sign from './components/Sign-up';
import Log from './components/Log-in';
import Profile from './components/Profile'
import Hero from './components/Hero';
// import { ReactDOM } from 'react-dom/client';
import {  BrowserRouter,  Routes,  Route, } from "react-router-dom";




const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (

    <ApolloProvider client={client}>

        <Nav />
        <div className="container">
          <div className="w-full max-w-[1440px] mx-auto bg-white">
          <Hero />
          </div>
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/Shop" element= {<Shop />} />
            <Route path="/Quests" element= {<Quests />}>
              <Route path=":username" element= {<Quests />} />
            </Route>
            <Route path="/Check" element= {<Check />} />
            <Route path="/Communities" element= {<Communities />} />
            <Route path="/Signup" element= {<Sign />} />
            <Route path="/Login" element= {<Log />} />
            <Route path="/profile" element = {<Profile />} />
            <Route path="/landing" element = {<Landing />} />
          </Routes>
        </div>
      </ApolloProvider>

  )
}

export default App;
