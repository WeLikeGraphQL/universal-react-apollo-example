# React Apollo Example

[![Gitter][gitter-img]][gitter-link]

> An example of the app with GraphQL! Built with React and Apollo Client!

[gitter-img]: https://badges.gitter.im/Join%20Chat.svg
[gitter-link]: https://gitter.im/WeLikeGraphQL/react-apollo-example?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge

## Features

 - [GraphQL](http://graphql.org/) for fetching data! The most awesome part of the project!
 - ES6/ES2015 with [Babel](https://babeljs.io/)
 - React data container for the [Apollo Client](http://dev.apollodata.com/react/) 
 - Integrating predictable state container[Redux](http://redux.js.org) with Apollo
 - Hot reloading using [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)
 - Development and production bundling by [Webpack](https://webpack.github.io)
 - [CSSNext](http://cssnext.io/): use of official W3C syntax of the future CSS
 - Transforming styles with JS plugins by [PostCSS](http://postcss.org/)
 - [Wow.js](http://mynameismatthieu.com/WOW/) for CSS animations
 - [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for resolving [layout fatigue](http://blog.karenmenezes.com/2014/apr/13/floats-inline-block-or-display-table-or-flexbox/). Doesn't work on IE 9, but it should not be a problem nowadays. See [browsers usage](http://caniuse.com/usage-table).
 - [CSS Modules](https://github.com/css-modules/css-modules): say goodbye to global scope in CSS and most of conflicts
 - Linting both JS and CSS, respectively by: [ESLint](http://eslint.org/) and [Stylelint](http://stylelint.io/)
 
 
 - Server Side Rendering in progress due to [this issue](https://github.com/apollostack/react-apollo/issues/250)
 
## Running the app

### 0. This repository is the frontend for [Wordpress GraphQL API Example](https://github.com/WeLikeGraphQL/wordpress-graphql-api-example). You need to run it first, however, you can also set up own endpoints.

### 1. Install Node/npm

Make sure you have Node.js installed (the app has been tested with Node `5.12.0`)

### 2. Clone and install dependencies

```
git clone https://github.com/WeLikeGraphQL/react-apollo-example.git
cd GitHunt
npm install
```

### 3. Build and run the app

Development mode:
```
npm run dev
```

Production mode: (not works fully due to [this issue](https://github.com/apollostack/react-apollo/issues/250))
```
npm run build
npm run start
```

- Open the client at http://localhost:3000
- You can change port and other settings in `.env` file

## How to Contribute:

Best way to keep up to date is check the [issues](https://github.com/WeLikeGraphQL/react-apollo-example/issues). We really welcome improvements for **all aspects** of an app.

1. Any suggestions/improvements/bugs can be in the form of Pull Requests, or creating an issue.
2. Coding guidelines: [Airbnb's Style Guide](https://github.com/airbnb/javascript)
