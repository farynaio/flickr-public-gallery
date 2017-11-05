/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import { call, fork, put, select } from 'redux-saga/effects';
import { fetchFeed, lazyFetchFeed } from '../../sagas';
import { Subject } from 'rxjs/Rx';

import actions from '../../actions';
import Api from '../../services/api';

describe('sagas', () => {
  let gen;

  before(() => {
    stub(Api, 'fetchFeed');
  });

  after(() => {
    Api.fetchFeed.restore();
  });

  describe('#fetchFeed', () => {
    let isLoading;

    beforeEach(() => {
      isLoading = new Subject();
      gen = fetchFeed({ isLoading });
    });

    it('should fetch data and put it into store', () => {
      const fetchedData = { data: ['alice', 'has', 'cat'] };
      expect(gen.next().value).to.be.deep.equal(fork([isLoading, isLoading.next], true));
      expect(gen.next().value).to.be.deep.equal(call(Api.fetchFeed));
      expect(gen.next(fetchedData).value).to.be.deep.equal(put(actions.fetchFeedSuccess(fetchedData.data)));
      expect(gen.next().value).to.be.deep.equal(fork([isLoading, isLoading.next], false));
      expect(gen.next()).to.be.deep.equal({ done: true, value: undefined });
    });

    it('should dispatch FETCH_FEED_FAIL if exception was thrown', () => {
      const error = Error('ERR!!');
      expect(gen.next().value).to.be.deep.equal(fork([isLoading, isLoading.next], true));
      expect(gen.next().value).to.be.deep.equal(call(Api.fetchFeed));
      expect(gen.throw(error).value).to.be.deep.equal(put(actions.fetchFeedFail(error)));
      expect(gen.next().value).to.be.deep.equal(fork([isLoading, isLoading.next], false));
      expect(gen.next()).to.be.deep.equal({ done: true, value: undefined });
    });

    it('should dispatch FETCH_FEED_FAIL if remote service return error', () => {
      const error = Error('ERR!!');
      expect(gen.next().value).to.be.deep.equal(fork([isLoading, isLoading.next], true));
      expect(gen.next().value).to.be.deep.equal(call(Api.fetchFeed));
      expect(gen.next({ error }).value).to.be.deep.equal(put(actions.fetchFeedFail({ error })));
      expect(gen.next().value).to.be.deep.equal(fork([isLoading, isLoading.next], false));
      expect(gen.next()).to.be.deep.equal({ done: true, value: undefined });
    });
  });
});
