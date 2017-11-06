# Flicker Public Gallery

This is TDD implementation of responsive infinite scroll displaying feeds taken from [Flicker Public Photo Feed](https://www.flickr.com/services/feeds/docs/photos_public/).

Technologies used: React, Redux, Redux Saga, Rx.js, Webpack, Sass, Express, Node, TDD, Mocha, Chai, Enzyme, Sinon, Nyc and couple more.

[Live Demo](https://flickr-public-gallery.herokuapp.com)

## What it does?

It displays content of [Flicker Public Photo Feed](https://www.flickr.com/services/feeds/docs/photos_public/) in infinite scroll. When user browse through content, new content is simultaneously delivered making an illusion of infinity.

## How to run it

Project is heroku ready. You can push it to your heroku account and it should work well. Before pushing to Heroku, make sure you build production bundle as described below.

### To run tests

Install dependencies:
```npm i```

Run webpack-dev-server:
``` npm start ```

Run tests & coverage:
``` npm test ```

Build production bundle:
``` npm run prod ```

## What could be done better:

* Fancier look & feel.
* Better, easier to maintain webpack config that combines dev and prod environments.
* Probably better image scaling policy.
* Probably better Sass structure.
* Add ESlint config, probably based on Airbnb.
* Add Webpack hot module replacement support in dev mode.

## Contribution

If you need some space for improvements, feel free to send me PR.

## Do you like it?

If yes, then give it star - thanks!
