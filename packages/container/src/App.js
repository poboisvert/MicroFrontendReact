import React from 'react';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import { BrowserRouter } from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Branch Activate</h1>
        <MarketingApp />
        <Header />
      </div>
    </BrowserRouter>
  );
};
