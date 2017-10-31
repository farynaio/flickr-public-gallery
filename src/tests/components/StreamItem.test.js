/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';

import StreamItem from '../../components/StreamItem';
import ItemPhoto from '../../components/ItemPhoto';
import Tags from '../../components/Tags';

describe('StreamItem component', () => {
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
    wrapper = shallow(<StreamItem {...item} />);
  });

  it('should contain ItemPhoto component', () => {
    expect(wrapper.contains(<ItemPhoto {...item} />)).to.be.true;
  });

  it('should contain description', () => {
    expect(wrapper.children('.stream-item__description')).to.have.length(1);
  });

  it('should contain ItemTags component', () => {
    expect(wrapper.contains(<Tags tags={item.tags} />)).to.be.true;
  });
});
