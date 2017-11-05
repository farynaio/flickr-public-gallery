/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({ tags }) => {
  const tagsElements = tags.map((tag, idx) => <div key={idx} className='tags__tag'>{tag}</div>);

  return (
    <div className='tags'>
      <span>Tags:&nbsp;</span>
      <div className='tags__container'>
        {tagsElements}
      </div>
    </div>
  );
};

Tags.defaultProps = {
  tags: []
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default Tags;
