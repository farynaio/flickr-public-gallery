/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import { call, put, select } from 'redux-saga/effects';
import { fetchFeed, lazyFetchFeed } from '../../sagas';

import * as actions from '../../actions';
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
    beforeEach(() => {
      gen = fetchFeed();
    });

    it('should fetch data and put it into store', () => {
      const fetchedData = { data: ['alice', 'has', 'cat'] };
      expect(gen.next().value).to.be.deep.equal(call(Api.fetchFeed));
      expect(gen.next(fetchedData).value).to.be.deep.equal(put(actions.fetchFeedSuccess(fetchedData.data)));
      expect(gen.next()).to.be.deep.equal({ done: true, value: undefined });
    });

    it('should dispatch FETCH_FEED_FAIL if exception was thrown', () => {
      const error = Error('ERR!!');
      expect(gen.next().value).to.be.deep.equal(call(Api.fetchFeed));
      expect(gen.throw(error).value).to.be.deep.equal(put(actions.fetchFeedFail(error)));
      expect(gen.next()).to.be.deep.equal({ done: true, value: undefined });
    });

    it('should dispatch FETCH_FEED_FAIL if remote service return error', () => {
      const error = Error('ERR!!');
      expect(gen.next().value).to.be.deep.equal(call(Api.fetchFeed));
      expect(gen.next({ error }).value).to.be.deep.equal(put(actions.fetchFeedFail({ error })));
    });
  });

  describe('#lazyFetchFeed', () => {
    beforeEach(() => {
      gen = lazyFetchFeed();
    });

    it('should call fetchFeed if feed collection in store is empty', () => {
      expect(gen.next().value).to.be.deep.equal(select);
      expect(gen.next({ feed: new Set() }).value).to.be.deep.equal(call(fetchFeed));
      expect(gen.next().done).to.be.true;
    });

    it('should not call any effect if feed collection is not empty', () => {
      expect(gen.next().value).to.be.deep.equal(select);
      expect(gen.next({ feed: new Set(['a', 'b']) }).done).to.be.true;
    });
  });
});
