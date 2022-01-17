const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/chunk-[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/chunk-[name].css',
    }),
  ],
});
