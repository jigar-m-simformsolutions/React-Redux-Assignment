import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reducerA from './store/reducerA'
import reducerB from './store/reducerB'
import reducer from './store/reducer'

const logger = store => {
  return next =>{
    return action => {
       next(action);
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
  rA : reducerA,
  rB : reducerB,
  reducer : reducer
})

const store = createStore(rootreducer, composeEnhancers(applyMiddleware(logger)));

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
