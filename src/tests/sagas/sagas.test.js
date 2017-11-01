/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import { call, put } from 'redux-saga/effects';
import { fetchFeed } from '../../sagas';

import * as actions from '../../actions';
import Api from '../../services/api';

describe('sagas', () => {
  describe('#fetchFeed', () => {
    let gen;

    beforeEach(() => {
      gen = fetchFeed();
    });

    before(() => {
      stub(Api, 'fetchFeed');
    });

    after(() => {
      Api.fetchFeed.restore();
    });

    it('should fetch data and put it into store', () => {
      const fetchedData = [];
      expect(gen.next().value).to.be.deep.equal(call(Api.fetchFeed));
      expect(gen.next(fetchedData).value).to.be.deep.equal(put(actions.fetchFeedSuccess(fetchedData)));
      expect(gen.next()).to.be.deep.equal({ done: true, value: undefined });
    });

    it('should return error when fail to retrive data', () => {
      const error = Error('ERR!!');
      expect(gen.next().value).to.be.deep.equal(call(Api.fetchFeed));
      expect(gen.throw(error).value).to.be.deep.equal(put(actions.fetchFeedFail(error)));
      expect(gen.next()).to.be.deep.equal({ done: true, value: undefined });
    });
  });
});
