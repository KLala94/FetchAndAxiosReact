import React from 'react';
import './App.css';
import RequestComp from './request/requestwithAxios';
import RequestFetchComp from './request/requestwithfetch';

function App() {
  return (
    <div className="App">
      <header >
      <RequestComp />
     <RequestFetchComp  />
      </header>
      
    </div>
  );
}

export default App;
