const path = require('path');

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
  mode: 'development',
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
    ],
  },
};
