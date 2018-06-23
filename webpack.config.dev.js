const path = require('path');
const appPort = process.env.PORT || 8888;

module.exports = {
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
