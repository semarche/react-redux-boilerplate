const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                ecma: 8,
                compress: {
                    warnings: false
                }
            }
        }),
        new ExtractTextPlugin({
            filename: "style.css",
            allChunks: true
        })
    ]
};
