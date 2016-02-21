import webpack from 'webpack';
import cssnext from 'cssnext';
import path from 'path';

export default {
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
    loaders: [
      { test: /\.css$/, loader: ['style-loader', 'css-loader?module', 'postcss-loader'].join('!') },
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
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
    })
  ],
  node: {
    fs: 'empty',
    module: 'empty',
    net: 'empty'
  }
};
