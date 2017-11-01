/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import actions from '../actions';

const INIT_STATE = {
  feed: []
};

const handlers = {
  [actions.FETCH_FEED]: (state, action) => { ...state, feed: [ ...state.feed, ...action.payload.feed ] }
};

const reducer(state=INIT_STATE, action) {
  const handler = handlers[action.type];
  if (handler) return handler(state, action);
  return state;
}

export default reducer;
