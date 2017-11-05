/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';
import PropTypes from 'prop-types';
import indicator from '../assets/loading_icon.gif';

const LoadingIndicator = () => (
  <div className='loading-indicator'>
    <img src={indicator} />
  </div>
);

export default LoadingIndicator;
