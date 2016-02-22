import webpack from 'webpack';
import path from 'path';
import config from './webpack.common.config.babel.js';

export default {
  ...config,
  entry: {
    app: path.join(__dirname, 'src', 'client.js'),
    vendor: [
      'alexa-lambda-skill',
      'babel-core',
      'babel-plugin-transform-decorators-legacy',
      'babel-plugin-transform-es2015-modules-commonjs',
      'babel-polyfill',
      'babel-preset-es2015',
      'babel-preset-stage-1',
      'codemirror/mode/javascript/javascript',
      'promise-try',
      'react',
      'react-code-mirror',
      'react-dom',
      'react-redux',
      'react-router'
    ]
  },
  output: {
    path: path.join(__dirname, 'static', 'dist'),
    filename: '[name].js',
    publicPath: '/dist'
  },
  module: {
    ...config.module,
    loaders: [
      ...config.module.loaders,
      { test: /\.css$/, loader: ['style-loader', 'css-loader?module', 'postcss-loader'].join('!') }
    ]
  },
  plugins: [
    ...config.plugins,
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  node: {
    fs: 'empty',
    module: 'empty',
    net: 'empty'
  }
};
