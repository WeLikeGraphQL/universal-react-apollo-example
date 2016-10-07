import React, { PropTypes } from 'react';

function Html({ content, state }) {
  if (process.env.NODE_ENV === 'development') {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="styles/bootstrap.min.css" />
          <link rel="stylesheet" href="styles/animate.min.css" />

          <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />

          <title>Universal React Apollo Example</title>
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
          <script
            dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__=${JSON.stringify(state)};` }}
            charSet="UTF-8"
          />
          <script src="dll/dll.vendors.js" charSet="UTF-8" />
          <script src="app.js" charSet="UTF-8" />
        </body>
      </html>
    );
  }

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="60x60" href="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon-precomposed" sizes="76x76" href="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/favicon-128x128.png" sizes="128x128" />
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="http://s3-eu-west-1.amazonaws.com/react-apollo-example/favicons/mstile-310x310.png" />

        <link rel="stylesheet" href="styles/bootstrap.min.css" />
        <link rel="stylesheet" href="styles/animate.min.css" />
        <link rel="stylesheet" href="styles/main.css" />

        <title>Universal React Apollo Example</title>
      </head>
      <body>
        <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__=${JSON.stringify(state)};` }}
          charSet="UTF-8"
        />
      </body>
    </html>
  );
}

Html.propTypes = {
  content: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
};


export default Html;
