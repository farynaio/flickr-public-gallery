/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';
import PropTypes from 'prop-types';

const ItemPhoto = ({ title, author, photoLink, authorLink }) => (
  <div className='item-photo'>
    <div src={photoLink} className='item-photo__img' style={{ backgroundImage: `url(${photoLink})`}} />
    <a href={photoLink} className='item-photo__title'>{title}</a>
    <span>&nbsp;by&nbsp;</span>
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
