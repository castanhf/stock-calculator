import React from 'react';
import logo from './logo.svg';
import './App.css';
import PurchaseCalculator from './components/purchase_calculator';
import SellCalculator from './components/sell_calculator';
import InvestmentCalculator from './components/investment_calculator';
import SummaryCalculator from './components/summary_calculator/index';
import * as componentNames from './constants/component_names'
import { connect } from 'react-redux';
import { addComponent } from './actions/index';

interface Props {
  addComponent: any
}

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Stock Calculator</h2>
      </header>
        <div className='App-intro'>
          <PurchaseCalculator id={componentNames.purchaseShares} />
          <SellCalculator id={componentNames.sellShares} />
          {/* <SummaryCalculator pid={componentNames.purchaseShares} sid={componentNames.sellShares} /> */}
        </div>
        <div className='App-intro'>
          {/**TODO: this is an in progress thing */}
          <InvestmentCalculator id={componentNames.purchaseShares} />
        </div>
    </div>
  );
}

export default App;
