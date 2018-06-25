const webpack = require('webpack');
const path = require('path');
const appPort = process.env.PORT || 8888;

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    historyApiFallback: true,
    noInfo: true,
    port: appPort,
    host: '0.0.0.0',
    publicPath: '/',
    disableHostCheck: true
  },
  devtool: 'cheap-module-eval-source-map',
};
