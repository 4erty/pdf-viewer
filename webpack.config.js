const path = require('path');

module.exports = {
  entry: {
    brocure: './src/index.js',
    'pdf.worker': 'pdfjs-dist/build/pdf.worker.entry',
  },
  output: {
    path: path.resolve(__dirname, 'brocure/'),
    publicPath: 'brocure/',
    filename: '[name].js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
