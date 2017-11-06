/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

import FeedItem from './FeedItem';
import LoadingIndicator from './LoadingIndicator';

class FeedLoader extends Component {
  static defaultProps = {
    items: []
  }

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    fetchFeed: PropTypes.func.isRequired
  }

	constructor(props) {
		super(props);

    this.observables = {};
    this.subscriptions = {};
		this.state = {
			isLoading: !this.props.items.length
		}
	}

  componentWillMount() {
    const { fetchFeed, items } = this.props;
		const { isLoading } = this.state;
    const that = this;

		this.observables.isLoading = new BehaviorSubject(isLoading);
    this.subscriptions.isLoading = this.observables.isLoading
      .subscribe( isLoading => that.setState({ isLoading }) );

    if (!items.length) {
      fetchFeed(this.observables.isLoading);
    }
  }

	componentDidMount() {
    const that = this;
		const { fetchFeed } = this.props;

    function shouldFetchMoreData() {
      if (!this.items.lastElementChild) return true;
      const itemRect = this.items.lastElementChild.getBoundingClientRect();
      return itemRect.y - 4 * itemRect.height <= 0;
    }

		this.observables.scroll = Observable.fromEvent(window, 'scroll')
			.debounceTime(500)
      .filter(shouldFetchMoreData.bind(this));

    this.subscriptions.scroll = this.observables.scroll
			.subscribe( () => fetchFeed(that.observables.isLoading) );
	}

	componentWillUnmount() {
    Object.values(this.subscriptions).forEach( subscription => subscription.unsubscribe() );
	}

  render() {
    const { items } = this.props;
		const { isLoading } = this.state;

    const childs = items.map( (item, idx) => <FeedItem key={idx} {...item} />);

    return (
      <div className='feed-loader'>
        <div className='feed-loader__items' ref={ node => this.items = node }>
          {childs}
        </div>
				{isLoading && <LoadingIndicator />}
      </div>
    );
  };
}

export default FeedLoader;
