// var path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    // add plugins
    //new CleanPlugin('./dist/bundle.*.js'),
    new HtmlPlugin({ template: './src/index.html' }),
  ],
};
