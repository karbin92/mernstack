import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Components/Customers/Customers';
function App() {
  return (
    <div className="App">
        <a
          className="App-link"
          href="https://artportalen.se"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      
          <Customers/>
    </div>
  );
}

export default App;
