/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';
import PropTypes from 'prop-types';

const LoadingIndicator = () => (
  <div className='loading-indicator'>
    <img src={require('../assets/loading_icon.gif')} />
  </div>
);

export default LoadingIndicator;
