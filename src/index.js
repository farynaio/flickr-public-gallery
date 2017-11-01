/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { createStore } from './store';

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
