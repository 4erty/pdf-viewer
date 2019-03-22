const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    brochure: './src/brochure/brochure.js',
  },

  output: {
    path: path.resolve(__dirname, 'brochure/'),
    // publicPath: 'assets/',
    filename: '[name].js',
    library: '__Brochure',
    libraryTarget: 'var',
  },

  mode: 'development',

  devtool: 'cheap-module-source-map',

  devServer: {
    overlay: true,
    hotOnly: true,
    // contentBase: path.join(__dirname, 'assets'),
  },

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
          configFile: path.join(__dirname, './babel.config.js'),
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
