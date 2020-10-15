  
import React from 'react';
import Page from './pages';
import Header from './components/partials/Header';

export default function App() {
  return (
    <div className='container'> 
        <Header />
        <Page />
    </div>
  );
}