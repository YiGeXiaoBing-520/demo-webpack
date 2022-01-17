const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.dev.js');

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: false };
const server = new WebpackDevServer(devServerOptions, compiler);

async function runServer() {
  console.log('==== starting server. ====');
  await server.start();
}

runServer();
