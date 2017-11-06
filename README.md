# Flicker Public Gallery

This is TDD implementation of responsive infinite scroll displaying feeds taken from [Flicker Public Photo Feed](https://www.flickr.com/services/feeds/docs/photos_public/).

Technologies used: React, Redux, Redux Saga, Rx.js, Webpack, Sass, Express, Node, TDD, Mocha, Chai, Enzyme, Sinon, Nyc and couple more.

[Live Demo](https://flickr-public-gallery.herokuapp.com)

## What it does?

It displays content of [Flicker Public Photo Feed](https://www.flickr.com/services/feeds/docs/photos_public/) in infinite scroll. When user browse through content, new content is simultaneously delivered making an illusion of infinity.

## How to run it?

Project is heroku ready. You can push it to your heroku account and it should work well. Before pushing to Heroku, make sure you build production bundle as described below.

This application requires installed [Node.js](https://nodejs.org).

This step is necessary for any further interaction with an app:

```npm install```

### To run tests & coverage

``` npm test ```

### To run in dev mode

``` npm start ```

### To build production bundle

``` npm run prod ```

After that you can open './dist/index.html' directly from your web browser or run ``` node server.js ``` and open http://localhost:5000 in your web browser.

## Ideas for improvement

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
