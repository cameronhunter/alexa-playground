import webpack from 'webpack';
import cssnext from 'cssnext';
import copy from 'copy-webpack-plugin';
import Path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const path = (...args) => Path.join(__dirname, ...args);

const common = {
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: { cacheDirectory: true } }
    ]
  },
  postcss: [
    cssnext({ browsers: 'last 2 versions' })
  ],
  resolve: {
    extensions: ['', '.json', '.js', '.jsx', '.css']
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
    })
  ]
};

export const client = {
  ...common,
  entry: {
    app: path('src', 'client.js'),
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
    path: path('build', 'www', 'assets'),
    filename: '[name].js',
    publicPath: '/assets'
  },
  module: {
    ...common.module,
    loaders: [
      ...common.module.loaders,
      { test: /\.css$/, loader: ['style', 'css?module', 'postcss'].join('!') }
    ]
  },
  plugins: [
    ...common.plugins,
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  node: {
    fs: 'empty',
    module: 'empty',
    net: 'empty'
  }
};

const server = {
  ...common,
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
    ...common.module,
    loaders: [
      ...common.module.loaders,
      { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css?module', 'postcss') }
    ]
  },
  plugins: [
    ...common.plugins,
    new copy([{ from: 'vendor', to: 'www/assets' }]),
    new ExtractTextPlugin('www/assets/app.css')
  ]
};

export default [client, server];
