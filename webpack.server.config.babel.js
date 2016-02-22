import Path from 'path';
import config from './webpack.common.config.babel.js';

const path = (...args) => Path.join(__dirname, ...args);

export default {
  ...config,
  target: 'node',
  entry: {
    server: path('src', 'server.js')
  },
  output: {
    path: path('build'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    ...config.module,
    loaders: [
      ...config.module.loaders,
      { test: /\.css$/, loader: ['css-loader?module', 'postcss-loader'].join('!') }
    ]
  },
};
