const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  devtool: false,

  entry: {
    main: './src/index.ts',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  externals: {
    bufferutil: 'bufferutil',
    'utf-8-validate': 'utf-8-validate',
  },

  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
