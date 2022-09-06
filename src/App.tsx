import React from 'react';
import logo from './logo.svg';
import './App.css';
import PurchaseCalculator from './components/purchase_calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Stock Calculator</h2>
        <p>
          <PurchaseCalculator />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
