﻿const path = require( 'path' );
const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === 'development';

const cssLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

module.exports = {
    entry: {
        main: [ 'babel-polyfill', path.resolve( __dirname, './Index/index.jsx' ) ]
    },
    output: {
        path: path.resolve( __dirname, './' ),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.map'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    cssLoader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
};
