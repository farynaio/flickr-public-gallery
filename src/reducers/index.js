/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import * as actions from '../actions';

const INIT_STATE = {
  feed: new Set()
};

const handlers = {
  [actions.FETCH_FEED_SUCCESS]: (state, action) => action.payload.forEach(item => state.feed.add(item))
};

function reducer(state=INIT_STATE, action) {
  const handler = handlers[action.type];
  if (handler) return handler(state, action);
  return state;
}

export default reducer;
