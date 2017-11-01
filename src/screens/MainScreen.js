/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FeedLoader from '../components/FeedLoader';

class MainScreen extends Component {
  render() {
    const {} = this.props;

    return (
      <div className=''>
        <FeedLoader />
      </div>
    );
  };
}

export default MainScreen;
