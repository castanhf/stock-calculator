import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tab from './components/tab/index'
import * as componentNames from './constants/component_names'
import { generateGuid } from './helpers/index'
// Import the calculators
import PurchaseCalculator from './components/purchase_calculator';
import SellCalculator from './components/sell_calculator';
import InvestmentCalculator from './components/investment_calculator';
import SummaryCalculator from './components/summary_calculator/index';


interface Props {
  addComponent?: any
}

interface State {
  tabs: Array<Tab>
  selectedTabId: string
}

interface Tab {
  id: string,
  name: string
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      tabs: [],
      selectedTabId: ''
    }
  }


  componentWillMount() {
    this.createTab()
  }


  createTab = () => {
    const guid = generateGuid()
    const updatedTabs = this.state.tabs.slice()
    updatedTabs.push({
      id: guid,
      name: 'New tab'
    })

    this.setState({ tabs: updatedTabs, selectedTabId: guid })
  }


  renameTab = (evnt: any) => {
    const { name, value } = evnt.target
    const { tabs } = this.state

    const newTabs = tabs.slice()
    const tab = newTabs.find((tab) => tab.id === name)

    if (!tab) throw 'Tab should exist'

    tab.name = value

    this.setState({ tabs: newTabs })
  }


  renderTabs = () => {
    const { tabs, selectedTabId } = this.state

    return tabs.map((tab) => {
      const purchaseId = componentNames.purchaseShares + '_' + tab.id
      const sellId = componentNames.sellShares + '_' + tab.id

      return <Tab id={tab.id} name={tab.name} key={tab.id} selected={selectedTabId === tab.id}>
        <PurchaseCalculator id={purchaseId} key={purchaseId} />
        <SellCalculator id={sellId} key={sellId} />
        <SummaryCalculator pid={purchaseId} sid={sellId} key={purchaseId + sellId} />
        {/* TODO: WIP stuff */}
        <InvestmentCalculator id={''} />
      </Tab>
    })
  }


  selectTab = (id: string) => {
    this.setState({ selectedTabId: id })
  }

  renderTabNavigation = () => {
    const { tabs } = this.state

    return tabs.map((tab) => {
      return <input name={tab.id} value={tab.name} onClick={() => this.selectTab(tab.id)} onChange={this.renameTab} />
    })
  }


  render() {
    return (
      <div className="App">
        <div className='App-background'>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Stock Calculator</h2>
          <input onClick={this.createTab} placeholder="Create tab" />
          <div>
            {this.renderTabNavigation()}
            {this.renderTabs()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
