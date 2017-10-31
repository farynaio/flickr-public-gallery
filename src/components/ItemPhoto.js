/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';
import PropTypes from 'prop-types';

const ItemPhoto = ({ title, author, photoLink, authorLink }) => (
  <div className='item-photo'>
    <img src={photoLink} className='item-photo__img' alt={title} />
    <a href={photoLink} className='item-photo__title'>{title}</a>
    <a href={authorLink} className='item-photo__author'>{author}</a>
  </div>
);

ItemPhoto.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  photoLink: PropTypes.string.isRequired,
  authorLink: PropTypes.string.isRequired
};

export default ItemPhoto;
