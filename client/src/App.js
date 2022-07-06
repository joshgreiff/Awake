import React from 'react'
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import Shop from './components/Shop';
import { useState } from 'react';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Homepage') {
           return <Homepage />
        }
        if (currentPage === 'Shop') {
          return <Shop />
        }
     }

    const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      {renderPage()}
      <main>
        <Homepage />
        <Shop />
      </main>
    </div>
  );
}

export default App;
