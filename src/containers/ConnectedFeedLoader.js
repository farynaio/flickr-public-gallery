/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import { connect } from 'react-redux';

import * as actions from '../actions';
import FeedLoader from '../components/FeedLoader';

const mapStateToProps = state => ({
  items: state.feed
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: () => dispatch(lazyFetchFeed())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedLoader);
