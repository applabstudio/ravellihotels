const webpack = require('webpack');
const path = require('path');

const config = require('./config');
const mode = require('./lib/mode');
const Jarvis = require("webpack-jarvis");

const JS_DEV = path.resolve(config.root.dev, config.js.dev);
const JS_DIST = path.resolve(config.root.dist, config.js.dist);
const publicPath = config.browserSync.proxy.target
  ? config.browserSync.proxy.publicPath
  : path.join('/', config.js.dist);

const webpackConfig = {
  context: JS_DEV,
  entry: {
    app: [
      './main.js',
    ],
  },
  output: {
    path: JS_DIST,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/js/',
    // publicPath: '/themes/custom/webit/js/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules/'),
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env',
              { modules: false },
            ],
          ],
          plugins: ['syntax-dynamic-import']
        },
      },
    ],
  },
  resolve: {
    modules: [
      JS_DEV,
      'node_modules',
      'bower_components',
    ],
    extensions: config.js.extensions,
  },
  plugins: [  
    new Jarvis({
      port: 1337 // optional: set a port
  })],
  mode: mode.mode,
  target: 'web',
};

/**
 * Modify webpackConfig depends on mode
 */
if (mode.mode === 'development') {
  webpackConfig.devtool = 'inline-source-map';
  webpackConfig.entry.app.unshift('webpack-hot-middleware/client?reload=true');
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfig;
