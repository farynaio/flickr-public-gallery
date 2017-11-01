/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';
import LoadingIndicator from '../../components/LoadingIndicator';

describe('LoadingIndicator', () => {
  it('should render image', () => {
    expect(shallow(<LoadingIndicator />).children('img')).to.have.length(1);
  });
});
