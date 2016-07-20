const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const host = "0.0.0.0"
const port = "8080"

module.exports = require('./webpack.base.config.js')({
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: `http://${host}:${port}/`,
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    stats: 'error-only',
    host: host,
    port: 8080
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true,
    })
  ],
  cssLoaders: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
})
