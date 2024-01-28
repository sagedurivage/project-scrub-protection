const path = require('/Users/sagedurivage/Downloads/irvine hacks 2024/hlpr');

module.exports = {
  entry: '/Users/sagedurivage/Downloads/irvine hacks 2024/hlpr/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
