/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';

import MainScreen from '../../screens/MainScreen';
import FeedLoader from '../../components/FeedLoader';

describe('MainScreen', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainScreen />);
  });

  it('should contain FeedLoader component', () => {
    expect(wrapper.contains(<FeedLoader />)).to.be.true;
  });
});
