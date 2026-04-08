/* eslint-disable no-underscore-dangle */
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const _SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: 'style.css',
  chunkFilename: '[id].css',
  ignoreOrder: true,
});

// Replaces the unmaintained imagemin-webpack-plugin (which pulled in dozens of
// vulnerable transitive deps). image-minimizer-webpack-plugin uses sharp to
// compress raster images webpack emits. SVGs are skipped here so svg-sprite-
// loader can extract its sprite without the minimizer mangling its asset.
const ImageminPlugin = new ImageMinimizerPlugin({
  test: /\.(jpe?g|png|gif)$/i,
  minimizer: {
    implementation: ImageMinimizerPlugin.sharpMinify,
    options: {
      encodeOptions: {
        jpeg: { quality: 85 },
        png: { compressionLevel: 9 },
        webp: { quality: 85 },
        gif: {},
      },
    },
  },
});

const SpriteLoaderPlugin = new _SpriteLoaderPlugin({
  plainSprite: true,
});

const ProgressPlugin = new webpack.ProgressPlugin();

module.exports = {
  ProgressPlugin,
  MiniCssExtractPlugin,
  ImageminPlugin,
  SpriteLoaderPlugin,
  CleanWebpackPlugin: new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['!*.{png,jpg,gif,svg}'],
    cleanAfterEveryBuildPatterns: ['remove/**', '!js', '!*.{png,jpg,gif,svg}'],
  }),
};
