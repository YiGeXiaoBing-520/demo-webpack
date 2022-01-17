const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/chunk-[name].js',
  },
  devServer: {
    port: 9001,
    static: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
});
