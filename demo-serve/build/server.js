const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.dev.js');
const ora = require('ora');

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: false };
const server = new WebpackDevServer(devServerOptions, compiler);

const spinner = ora('starting server....\n');

async function runServer() {
  await server.start();
  spinner.start();

  compiler.hooks.done.tap('html-webpack-plugin', () => {
    spinner.stop();
  });
}

runServer();
