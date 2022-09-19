import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
//import { field } from './reducers/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/index'

//TODO: it was createStore<StoreState> like in video - I dont get it
//maybe it is outdated. video was from 2017
const store = createStore(rootReducer, {
  components: {}
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);