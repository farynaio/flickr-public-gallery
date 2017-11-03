/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';

import ItemPhoto from '../../components/ItemPhoto';

let props = {
  title: '_title_',
  author: '_author_',
  photoLink: '_photoLink_',
  authorLink: '_authorLink_'
};

describe('ItemPhoto', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ItemPhoto {...props} />);
  });

  it('should contain img.item-photo__img element with alt attribute set to title', () => {
    expect(wrapper.children(`img.item-photo__img[alt='${props.title}']`)).to.have.length(1);
  });

  it('should contain a.item-photo__author element refering to "${props.authorLink}" URL and "props.author"', () => {
    expect(wrapper.children(`a.item-photo__author[href='${props.authorLink}']`).text()).to.equal(props.author);
  });

  it(`should contain a.item-photo__title element refering to "${props.photoLink}" URL and "${props.title}" as inner text`, () => {
    expect(wrapper.children(`a.item-photo__title[href='${props.photoLink}']`).text()).to.equal(props.title);
  });
});
