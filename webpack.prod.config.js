const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    brochure: './src/brochure/brochure.js',
  },
  output: {
    path: path.resolve(__dirname, 'brochure/'),
    publicPath: '/brochure',
    filename: '[name].js',
    library: '__Brochure',
    libraryTarget: 'var',
  },
  mode: 'production',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          configFile: path.join(__dirname, './.babel.config.js'),
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'md4',
      hashDigest: 'base64',
      hashDigestLength: 4,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
};
