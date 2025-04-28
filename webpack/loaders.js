const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const globImporter = require('sass-glob-importer');
const nodeSassGlobImporter = require('node-sass-glob-importer');

const JSLoader = {
  test: /^(?!.*\.(stories|component)\.js$).*\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

const ImageLoader = {
  test: /\.(png|svg|jpg|gif)$/i,
  exclude: /icons\/.*\.svg$/,
  type: 'asset/resource',
  generator: {
    filename: 'images/[name][ext]',
  },
};

const CSSLoader = {
  test: /\.s[ac]ss$/i,
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        url: false,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        postcssOptions: {
          plugins: [
            ['autoprefixer'],
            ['postcss-custom-properties'],
          ],
        },
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        sassOptions: {
          importer: [globImporter(), nodeSassGlobImporter()],
          includePaths: [
            path.resolve(__dirname, '../node_modules'),
            path.resolve(__dirname, '../components')
          ],
          outputStyle: 'compressed',
        },
      },
    },
  ],
};

const SVGSpriteLoader = {
  test: /icons\/.*\.svg$/, // your icons directory
  loader: 'svg-sprite-loader',
  options: {
    extract: true,
    spriteFilename: '../dist/icons.svg',
  },
};

module.exports = {
  JSLoader,
  CSSLoader,
  SVGSpriteLoader,
  ImageLoader,
};
