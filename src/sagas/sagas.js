/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import { call, put, takeEvery } from 'redux-saga/effects';

import Api from '../services/api';

import * as actions from '../actions';

export function* fetchFeed() {
  try {
    const feed = yield call(Api.fetchFeed);
    yield put(actions.fetchFeedSuccess(feed));
  } catch (err) {
    yield put(actions.fetchFeedFail(err));
  }
}

export default function* rootSaga() {
  yield takeEvery(actions.FETCH_FEED, fetchFeed);
}
