import webpack from 'webpack';
import cssnext from 'cssnext';

export default {
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
