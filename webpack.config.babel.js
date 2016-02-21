import webpack from "webpack";
import path from "path";

export default {
  entry: {
    app: path.join(__dirname, "src", "client.js"),
    vendor: ["react", "react-dom", "react-router", "babel-polyfill"]
  },
  output: {
    path: path.join(__dirname, "static", "dist"),
    filename: "[name].js",
    publicPath: "/dist"
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader", query: { cacheDirectory: true } }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    fs: 'empty',
    module: 'empty',
    net: 'empty'
  }
}
