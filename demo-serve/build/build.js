const Webpack = require('webpack');
const ora = require('ora');
const chalk = require('chalk');
const webpackConfig = require('./webpack.config.prod');
const compiler = Webpack(webpackConfig);

const spinner = ora('building for production...\n\n');
spinner.start();

compiler.run((err, stats) => {
  if (err) {
    throw err;
  }

  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: true,
      chunks: true,
      chunkModules: false,
    }) + '\n\n'
  );

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'));
    process.exit();
  }
  compiler.close((err) => {
    spinner.stop();
    if (err) {
      throw err;
    }
    console.log(chalk.bold.greenBright('  Build complete.\n'));
    console.log(chalk.green('  Tip: built files are meant to be served over an HTTP server.\n' + "  Opening index.html over file:// won't work.\n"));
  });
});
