/* eslint-disable global-require */
import path from 'path';
import webpack from 'webpack';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';

const App = require('../dist/server.js');

dotenv.config();
const APP_PORT = process.env.APP_PORT || 3000;
const HOST = process.env.HOST || 'http://localhost';
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.set('trust proxy', 'loopback');

if (process.env.NODE_ENV === 'development') {
  const webpackDevConfig = require('../webpack/dev-client.js'); // eslint-disable-line import/newline-after-import
  const compiler = webpack(webpackDevConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    hot: true,
    publicPath: webpackDevConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.get('*', App.default);

app.listen(APP_PORT, () => {
  console.log(`App is now running on ${HOST}:${APP_PORT}`);
});
