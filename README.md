# Universal React Apollo Example

[![Gitter][gitter-img]][gitter-link]
[![Build Status](https://travis-ci.org/WeLikeGraphQL/universal-react-apollo-example.svg?branch=master)](https://travis-ci.org/WeLikeGraphQL/universal-react-apollo-example)
[![Coverage Status](https://coveralls.io/repos/github/WeLikeGraphQL/universal-react-apollo-example/badge.svg?branch=master)](https://coveralls.io/github/WeLikeGraphQL/universal-react-apollo-example?branch=master)

> An example of the app that shows how to use a modern stack (strong accent on GraphQL!).

[gitter-img]: https://badges.gitter.im/Join%20Chat.svg
[gitter-link]: https://gitter.im/WeLikeGraphQL/react-apollo-example?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge

## Features

 - [GraphQL](http://graphql.org/) for fetching data! The most awesome part of the project!
 - Universal Rendering
 - ES6/ES2015 with [Babel](https://babeljs.io/)
 - React data container for the [Apollo Client](http://dev.apollodata.com/react/) 
 - Integrating predictable state container [Redux](http://redux.js.org) with Apollo
 - Hot reloading using [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)
 - Development and production bundling by [Webpack](https://webpack.github.io)
 - [CSSNext](http://cssnext.io/): use of official W3C syntax of the future CSS
 - Transforming styles with JS plugins by [PostCSS](http://postcss.org/)
 - [Wow.js](http://mynameismatthieu.com/WOW/) for CSS animations
 - [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for resolving [layout fatigue](http://blog.karenmenezes.com/2014/apr/13/floats-inline-block-or-display-table-or-flexbox/) and making the app responsive (open the app in desktop, mobile, whatever...). Doesn't work on IE 9, but it should not be a problem nowadays. See [browsers usage](http://caniuse.com/usage-table).
 - [CSS Modules](https://github.com/css-modules/css-modules): say goodbye to global scope in CSS and most of conflicts
 - [Jest](https://facebook.github.io/jest/), [Enzyme](http://airbnb.io/enzyme/), [Chai](http://chaijs.com/), [Sinon](http://sinonjs.org/) for testing (no [snapshot](https://facebook.github.io/jest/blog/2016/07/27/jest-14.html) tests yet)
 - Linting both JS and CSS, respectively by: [ESLint](http://eslint.org/) and [Stylelint](http://stylelint.io/)
 
## Running the app

### 1. This repository is the frontend for [Wordpress GraphQL API Example](https://github.com/WeLikeGraphQL/wordpress-graphql-api-example). You need to run it first, however, you can also set up own endpoints.

### 2. Install Node/npm

Make sure you have Node.js installed (the app has been tested with Node `5.12.0`). You can use `npm` or `yarn` for running commands (we prefer `yarn`, as it is faster).

### 3. Clone and install dependencies

```
git clone https://github.com/WeLikeGraphQL/react-apollo-example.git
cd react-apollo-example
yarn install
```

### 4. Build and run the app

Development mode:
```
yarn run build:dll
yarn run dev
```

Production mode:
```
yarn run build
yarn start
```

- Open the client at http://localhost:3000
- You can change ports and other settings in `.env` file

### 5. Running Tests

```
yarn test
```

## How to Contribute:

Best way to keep up to date is check the [issues](https://github.com/WeLikeGraphQL/react-apollo-example/issues). We really welcome improvements for **all aspects** of an app.

1. Any suggestions/improvements/bugs can be in the form of Pull Requests, or creating an issue.
2. Coding guidelines: [Airbnb's Style Guide](https://github.com/airbnb/javascript)
