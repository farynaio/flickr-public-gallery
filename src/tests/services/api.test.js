/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import Api from '../../services/api';

describe('Api', () => {
  describe('#fetchFeed', () => {
    before(() => {
      stub(Api, 'jsonp');
    });

    after(() => {
      Api.jsonp.restore();
    });

    it('should call jsonp function', () => {
      Api.fetchFeed();
      expect(Api.jsonp.calledOnce).to.be.true;
    });
  });
});
