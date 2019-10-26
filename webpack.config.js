const Dotenv = require('dotenv-webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './workers-site/index.js',
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: 'raw-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
        ],
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin(),
    ],
};