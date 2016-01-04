const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: process.env.NODE_ENV !== 'production' ? 'eval-source-map' : '',
  entry: {
    bundle: [
      'webpack-hot-middleware/client',
      './src/app',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'source-map-loader',
    }],
    loaders: [{
      test: /\.js$/,
      loaders: [
        'babel',
        'eslint',
      ],
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }, {
      test: /\.css$/,
      loaders: ['style', 'css'],
    }, {
      test: /\.png$/,
      loader: 'url-loader?prefix=img/&limit=5000',
    }, {
      test: /\.jpg$/,
      loader: 'url-loader?prefix=img/&limit=5000',
    }, {
      test: /\.gif$/,
      loader: 'url-loader?prefix=img/&limit=5000',
    }, {
      test: /\.woff$/,
      loader: 'url-loader?prefix=font/&limit=5000',
    }, {
      test: /\.eot$/,
      loader: 'file-loader?prefix=font/',
    }, {
      test: /\.ttf$/,
      loader: 'file-loader?prefix=font/',
    }, {
      test: /\.svg$/,
      loader: 'file-loader?prefix=font/',
    }],
  },
};
