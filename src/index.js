import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore,combineReducers } from 'redux'
import reducerA from './store/reducerA'
import reducerB from './store/reducerB'
import reducer from './store/reducer'

const rootreducer = combineReducers({
  rA : reducerA,
  rB : reducerB,
  reducer : reducer
})

const store = createStore(rootreducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
