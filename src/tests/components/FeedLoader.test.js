/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';

import FeedLoader from '../../components/FeedLoader';
import StreamItem from '../../components/StreamItem';
import LoadingIndicator from '../../components/LoadingIndicator';

describe('FeedLoader', () => {
  let items;

  before(() => {
    createDocument();
  });

  beforeEach(() => {
    items = [
      {
        title: '__title1__',
        photoLink: '__photoLink1__',
        author: '__author1__',
        authorLink: '__authorLink1__',
        description: '__description1__',
        tags: [ 'tag1', 'tag2', 'tag3' ]
      },
      {
        title: '__title2__',
        photoLink: '__photoLink2__',
        author: '__author2__',
        authorLink: '__authorLink2__',
        description: '__description2__',
        tags: [ 'tag1', 'tag2', 'tag3' ]
      }
    ];
  });

  it('should not render any elements when not specified prop "item"', () => {
    expect(shallow(<FeedLoader fetchFeed={()=>({})} />).children(<StreamItem {...items[0]} />)).to.have.length(0);
  });

  it('should render 5 elements StreamItems for 5 items in props', () => {
    const expected = items.map( (item, idx) => <StreamItem key={idx} {...item} />);
    expect(shallow(<FeedLoader fetchFeed={function(){}} items={items} />).containsAllMatchingElements(expected)).to.be.true;
  });
});
