const path = require('path');
const { globSync } = require('glob');
const loaders = require('./loaders');
const plugins = require('./plugins');

const webpackDir = path.resolve(__dirname);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

function getEntries(pattern) {
  const entries = {};

  globSync(pattern).forEach((file) => {
    const filePath = file.split('components/')[1];
    const newfilePath = `js/${filePath.replace('.js', '')}`;
    entries[newfilePath] = file;
  });

  entries.svgSprite = path.resolve(webpackDir, 'svgSprite.js');
  entries.css = path.resolve(webpackDir, 'css.js');

  return entries;
}

module.exports = {
  entry: getEntries(
    path.resolve(
      rootDir,
      'components/**/!(*.stories|*.component|*.min|*.test).js',
    ),
  ),
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.SVGSpriteLoader,
      loaders.ImageLoader,
      loaders.JSLoader,
    ],
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.ImageminPlugin,
    plugins.SpriteLoaderPlugin,
    plugins.ProgressPlugin,
    plugins.CleanWebpackPlugin,
  ],
  output: {
    path: distDir,
    filename: '[name].js',
    chunkFormat: 'array-push',
  },
  resolve: {
    modules: [
      path.resolve(rootDir, 'node_modules'),
      'node_modules'
    ],
    alias: {
      'normalize.css': path.resolve(rootDir, 'node_modules/normalize.css'),
      'breakpoint-sass': path.resolve(rootDir, 'node_modules/breakpoint-sass')
    }
  },
};
