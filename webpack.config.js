const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prod = (process.env.NODE_ENV === 'production');
const config = prod ? require('./webpack.config.prod.js') : require('./webpack.config.dev.js');

const extractSass = new ExtractTextPlugin({
    filename: 'assets/[name].[contenthash].css',
    disable: !prod
});

const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'assets/vendor',
        minChunks: Infinity,
    }),
    extractSass,
    new HtmlWebpackPlugin({
        template: './index.html',
        favicon: './favicon.ico',
        publicPath: '/'
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
];

if (process.env.ENABLE_ANALYZE) {
    plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(config, {
    entry: {
        app: ['babel-polyfill', './src/Root.js'],
        vendor: ['react', 'react-dom', 'react-router-dom', 'moment'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './',
        filename: 'assets/[name].[hash].js',
        chunkFilename: 'assets/[name].[chunkhash].js'
    },

    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json'],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: function () {
                    const styleLoader = {
                        loader: 'style-loader'
                    };

                    const cssLoader = {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        }
                    };

                    return prod ?
                        ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use: [ cssLoader ]
                        })
                        :
                        [ styleLoader, cssLoader ];
                }()
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        'css-loader',
                        'sass-loader',
                        'postcss-loader',
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    plugins
});
