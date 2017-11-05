/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import { call, fork, put, takeLatest } from 'redux-saga/effects';

import Api from '../services/api';
import actions from '../actions';

export function* fetchFeed({ isLoading }) {
  try {
    if (isLoading) {
      yield fork([isLoading, isLoading.next], true);
    }

    const response = yield call(Api.fetchFeed);
    if (response.error) throw response.error;
    yield put(actions.fetchFeedSuccess(response.data));
  } catch (err) {
    yield put(actions.fetchFeedFail(err));
  } finally {
    if (isLoading) {
      yield fork([isLoading, isLoading.next], false);
    }
  }
}

export default function* rootSaga() {
  yield takeLatest(actions.FETCH_FEED, fetchFeed);
}
