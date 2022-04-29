import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import GameController from './components/GameController';

const store = createStore(rootReducer);

store.subscribe(() => 
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <GameController />
  </Provider>,
  document.getElementById('root')
);