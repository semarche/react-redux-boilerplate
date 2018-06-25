const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        PUBLIC_URL: JSON.stringify(process.env.PUBLIC_URL),
      }
    }),
      new UglifyJsPlugin({
          sourceMap: true,
          uglifyOptions: {
              ecma: 8,
              compress: {
                  warnings: false
              }
          }
      }),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new ExtractTextPlugin({
        filename: 'assets/[name].[contenthash].css',
        allChunks: true
      })
  ]
};
