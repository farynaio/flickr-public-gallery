/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import sagas from '../sagas';

export default function configureStore(initialData) {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(
    sagaMiddleware
  );

  sagaMiddleware.run(sagas);

  return configureStore(middleware);
};
