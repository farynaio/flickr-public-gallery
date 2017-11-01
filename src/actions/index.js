/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
export const FETCH_FEED = 'FETCH_FEED';
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS';
export const FETCH_FEED_FAIL = 'FETCH_FEED_FAIL';

export const fetchFeed = () => ({ type: FETCH_FEED });

export const fetchFeedSuccess = feed => ({
  type: FETCH_FEED_SUCCESS,
  payload: { feed }
});

export const fetchFeedFail = err => {
  if(process.env.NODE_ENV === 'development') {
    console.error(err);
  }
  return { type: FETCH_FEED_FAIL };
};
