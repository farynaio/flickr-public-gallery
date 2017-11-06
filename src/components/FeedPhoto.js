/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import React from 'react';
import PropTypes from 'prop-types';

const FeedPhoto = ({ title, author, photoLink, authorLink }) => (
  <div className='feed-item__feed-photo'>
    <div src={photoLink} className='feed-item__feed-photo__img' style={{ backgroundImage: `url(${photoLink})`}} />
    <a href={photoLink} className='feed-item__feed-photo__title'>{title}</a>
    <span>&nbsp;by&nbsp;</span>
    <a href={authorLink} className='feed-item__feed-photo__author'>{author}</a>
  </div>
);

FeedPhoto.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  photoLink: PropTypes.string.isRequired,
  authorLink: PropTypes.string.isRequired
};

export default FeedPhoto;
