// var path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(pdf|jpg|png|gif|ico)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 5000 },
        },
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml',
          },
        },
      },
    ],
  },
  plugins: [
    // add plugins
    //new CleanPlugin('./dist/bundle.*.js'),
    new HtmlPlugin({ template: './src/index.html' }),
  ],
};
