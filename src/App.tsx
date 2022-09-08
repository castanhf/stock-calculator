import React from 'react';
import logo from './logo.svg';
import './App.css';
import PurchaseCalculator from './components/purchase_calculator';
import SellCalculator from './components/sell_calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Stock Calculator</h2>
      </header>
        <p className='App-intro'>
          <PurchaseCalculator />
          <SellCalculator />
        </p>
    </div>
  );
}

export default App;
