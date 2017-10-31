/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';

import Tags from '../../components/Tags';

describe('Tags', () => {
  it('should generate empty tags element when no "tags" property is set', () => {
    expect(render(<Tags />).children()).to.have.length(0);
  });

  it('should not generate any elements for empty "tag" property', () => {
    expect(render(<Tags tags={[]} />).children()).to.have.length(0);
  });

  it('should generate div.tags__tag for every element in "tags" property', () => {
    const tags = [ 'tag1', 'tag2', 'tag3' ];
    expect(render(<Tags tags={tags} />).children('.tags__tag')).to.have.length(tags.length);
  });
});
