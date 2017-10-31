/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';
import PropTypes from 'prop-types';

import ItemPhoto from './ItemPhoto';
import Tags from './Tags';

const StreamItem = (props) => (
  <div className='stream-item'>
    <ItemPhoto {...props} />
    <p className='stream-item__description'>{props.description}</p>
    <Tags tags={props.tags} />
  </div>
);

StreamItem.defaultProps = {
  tags: []
};

StreamItem.propTypes = {
  title: PropTypes.string.isRequired,
  photoLink: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorLink: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default StreamItem;
