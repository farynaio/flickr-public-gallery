/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */
import jsonpWithCallback from 'jsonp';

const API_BASE = 'https://api.flickr.com/services';

class Api {
	static jsonp(path, options) {
		return new Promise(
				(resolve, reject) => jsonpWithCallback(`${API_BASE}${path}`, options,
					(err, data) => err ? reject({ error }) : resolve({ data })));
	}

  static fetchFeed() {
    return Api.jsonp('/feeds/photos_public.gne?format=json', { name: 'jsonFlickrFeed' });
  }
}

export default Api;
