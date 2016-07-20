const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = require('./webpack.base.config.js')({
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { 
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true,
    }),
    new ExtractTextPlugin('[name].[contenthash].css')
  ],
  cssLoaders: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader?&modules&importLoaders=1!postcss-loader'
  )
})
