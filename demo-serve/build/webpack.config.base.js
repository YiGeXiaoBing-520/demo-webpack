const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    main: path.resolve(__dirname, '../src/main.js'),
  },
  output: {
    publicPath: '/',
    clean: true,
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|jpg|git)$/i,
        type: 'javascript/auto',
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../src/index.html',
      minify: true,
    }),
  ],
};
