/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StreamItem from './StreamItem'

class FeedLoader extends Component {
  static defaultProps = {
    items: []
  }

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    fetchFeed: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchFeed();
  }

  render() {
    const { items } = this.props;
    const childs = items.map( item => <StreamItem {...item} />);

    return (
      <div className='feed-loader'>
        {childs}
      </div>
    );
  };
}

export default FeedLoader;
