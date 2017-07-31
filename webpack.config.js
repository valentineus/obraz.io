'use strict';
// Plugins
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// Main dependencies
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/css/style.css'),
        path.resolve(__dirname, 'src/js/index.js')
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets')
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }]
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        new UglifyJSPlugin()
    ]
};