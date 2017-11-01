/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import jsonpWithCallback from 'jsonp';

const API_BASE = 'https://api.flickr.com/services';

class Api {
  jsonp(path, options) {
    return new Promise(
      (resolve, reject) => jsonp(`${API_BASE}path`, options,
        (err, data) => err ? reject(err) : resolve(data)));
  }

  fetchFeed() {
    return this.jsonp('/feeds/photos_public.gne?format=json', { prefix: 'jsonFlickrFeed' })
  }
};

export default new Api;
