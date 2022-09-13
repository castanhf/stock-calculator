import React from 'react';
import logo from './logo.svg';
import './App.css';
import PurchaseCalculator from './components/purchase_calculator';
import SellCalculator from './components/sell_calculator';
import * as componentNames from './constants/component_names'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Stock Calculator</h2>
      </header>
        <p className='App-intro'>
          <PurchaseCalculator id={componentNames.purchaseShares} />
          <SellCalculator id={componentNames.sellShares} />
        </p>
    </div>
  );
}

export default App;
