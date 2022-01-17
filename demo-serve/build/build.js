const Webpack = require('webpack');
const webpackConfig = require('./webpack.config.prod');

const compiler = Webpack(webpackConfig);

compiler.run((err, stats) => {
  console.log('run');
  compiler.close((err, result) => {
    console.log('close');
  });
});
