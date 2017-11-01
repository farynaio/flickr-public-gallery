/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';

import Api from '../services/api';

import * as actions from '../actions';

export function* fetchFeed() {
  try {
    const response = yield call(Api.fetchFeed);
    if (response.error) throw response.error;
    yield put(actions.fetchFeedSuccess(response.data));
  } catch (err) {
    yield put(actions.fetchFeedFail(err));
  }
}

export function* lazyFetchFeed() {
  const { feed } = yield select;
  if (!feed.size) {
    yield call(fetchFeed);
  }
}

export default function* rootSaga() {
  yield takeEvery(actions.FETCH_FEED, fetchFeed);
  yield takeLatest(action.LAZY_FETCH_FEED, lazyFetchFeed);
}
