import React from 'react';
import './App.css';
import RequestComp from './request/request';
import RequestFetchComp from './request/requestwithfetch';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <RequestComp />
     <RequestFetchComp  />  
      </header>
      
    </div>
  );
}

export default App;
