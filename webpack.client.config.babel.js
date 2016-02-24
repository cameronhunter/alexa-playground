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
      'babel-preset-es2015',
      'babel-preset-stage-1',
      'codemirror/mode/javascript/javascript',
      'promise-try',
      'react',
      'react-code-mirror',
      'react-dom',
      'react-ga',
      'react-redux',
      'react-router'
    ]
  },
  output: {
    path: path.join(__dirname, 'build', 'www', 'assets'),
    filename: '[name].js',
    publicPath: '/assets'
  },
  module: {
    ...config.module,
    loaders: [
      ...config.module.loaders,
      { test: /\.css$/, loader: ['style', 'css?module', 'postcss'].join('!') }
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
