import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ItemList from './components/ItemList';
import './index.css';

const store = configureStore(); // an inital state can also be passed here

render (
  <Provider store={store}>
    <ItemList />
  </Provider>,
  document.getElementById('root')
);
