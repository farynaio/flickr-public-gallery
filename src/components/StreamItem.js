/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import ItemPhoto from './ItemPhoto';
import Tags from './Tags';

const StreamItem = props => {
  const description = props.description ? sanitize(props.description) : '';

  return (
    <div className='stream-item'>
      <ItemPhoto {...props} />
      <div className='stream-item__description'
        dangerouslySetInnerHTML={{ __html: description }} />
      <Tags tags={props.tags} />
    </div>
  );
};

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
