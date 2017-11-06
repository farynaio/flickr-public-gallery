/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';

import FeedItem from '../../components/FeedItem';
import FeedPhoto from '../../components/FeedPhoto';
import Tags from '../../components/Tags';

describe('FeedItem component', () => {
  let item;
  let wrapper;

  before(() => {
    item = {
      title: 'Title',
      photoLink: 'https://google.com',
      author: 'Jeff Bezos',
      authorLink: 'https://amazon.com',
      description: 'Once upon a time...',
      tags: [ 'tag1', 'tag2', 'tag3', 'tag4' ]
    };
  });

  beforeEach(() => {
    wrapper = shallow(<FeedItem {...item} />);
  });

  it('should contain FeedPhoto component', () => {
    expect(wrapper.contains(<FeedPhoto {...item} />)).to.be.true;
  });

  it('should contain description', () => {
    expect(wrapper.children('.feed-loader__feed-item__description')).to.have.length(1);
  });

  it('should contain ItemTags component', () => {
    expect(wrapper.contains(<Tags tags={item.tags} />)).to.be.true;
  });
});
