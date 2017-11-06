/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';
import PropTypes from 'prop-types';
import sanitize from 'sanitize-html';

import FeedPhoto from './FeedPhoto';
import Tags from './Tags';

const FeedItem = props => {
  const description = props.description ?
		<div className='feed-item__description' dangerouslySetInnerHTML={{ __html: sanitize(props.description) }} /> : <div className='feed-item__description'>&nbsp</div>;

  return (
    <div className='feed-item'>
      <FeedPhoto {...props} />
			{description}
      <Tags tags={props.tags} />
    </div>
  );
};

FeedItem.defaultProps = {
  tags: []
};

FeedItem.propTypes = {
  title: PropTypes.string.isRequired,
  photoLink: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorLink: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default FeedItem;
