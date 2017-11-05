/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */

import actions from '../../actions';
import reducer from '../../reducers';

const NUMBER_OF_FEEDS = 5;

function generateProperFullInputFeed() {
  return {
    feed: Array.from(Array(NUMBER_OF_FEEDS).keys()).map( (item, idx) =>
      ({
        title: `__title__${idx}`,
        date_taken: `__date_taken__${idx}`,
        description: `__description__${idx}`,
        published: `__published__${idx}`,
        link: `__link__${idx}`,
        author: `__author__${idx}`,
        author_id: `__author_id__${idx}`,
        tags: idx.toString()
      }))
  };
}

function generateProperFullOutputFeed() {
  return {
    feed: generateProperFullInputFeed().feed.map( item =>
      ({
        title: item.title,
        dateTaken: item.date_taken,
        description: item.description,
        published: item.published,
        photoLink: item.link,
        author: item.author,
        authorLink: `https://www.flickr.com/photos/${item.author_id}`,
        tags: item.tags ? item.tags.split(' '): []
      }))
  };
}

describe('reducer', () => {
  describe('#reducer', () => {
    let initState;

    beforeEach(() => {
      initState = {
        feed: new Set()
      };
    });

  //   it(`should return proper state with feed items in response to action ${actions.FETCH_FEED_SUCCESS} which return feed items`, () => {
  //     const action = { type: actions.FETCH_FEED_SUCCESS, payload: generateProperFullInputFeed() };
  //     expect(reducer(initState, action)).to.be.deep.equal(generateProperFullOutputFeed());
  //   });
  //
  //   it(`should return proper state without items in response to action ${actions.FETCH_FEED_SUCCESS} which return feed items`);
  //
  //   it(`should return proper state with feed prop resulted from marging current state and state from action.payload in response to action ${actions.FETCH_FEED_SUCCESS}`);
  });
});
