const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

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
        api: 'modern',
        sourceMap: true,
        sassOptions: {
          loadPaths: [
            path.resolve(__dirname, '../node_modules'),
            path.resolve(__dirname, '../components'),
          ],
          // Silence deprecations that require a full @use/@forward migration to fix
          silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
        },
      },
    },
    // Expands glob patterns in @import/@use (e.g. @import "00-base/**/*.scss")
    // before Sass sees them, removing the need for legacy glob importers.
    {
      loader: 'glob-import-loader',
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
