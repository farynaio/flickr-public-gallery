/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import actions from '../actions';

const INIT_STATE = {
  feed: new Set()
};

function feedItemMapper(item) {
  return {
    title: item.title,
    dateTaken: item.date_taken,
    description: item.description,
    published: item.published,
    photoLink: item.media.m,
    author: item.author,
    authorLink: `https://www.flickr.com/photos/${item.author_id}`,
    tags: item.tags ? item.tags.split(' '): []
  };
}

const handlers = {
  [actions.FETCH_FEED_SUCCESS]: (state, action) =>
    ({...state, feed: action.payload.items.reduce((prev, crr) =>
      prev.add(feedItemMapper(crr)),
      new Set(state.feed))})
};

function reducer(state=INIT_STATE, action) {
  const handler = handlers[action.type];
  if (handler) return handler(state, action);
  return state;
}

export default reducer;
