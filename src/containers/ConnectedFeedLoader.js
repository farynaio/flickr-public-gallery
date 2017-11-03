/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import { connect } from 'react-redux';

import actions from '../actions';
import FeedLoader from '../components/FeedLoader';

const mapStateToProps = state => ({
  items: Array.from(state.feed.values())
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: () => dispatch(actions.lazyFetchFeed())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedLoader);
