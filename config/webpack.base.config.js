const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  source:   path.resolve('src'),
  output:   path.resolve('dist'),
  modules:  path.resolve('node_modules')
}

module.exports = (options) => ({
  target: 'web',

  devtool: options.devtool,

  context: paths.source,

  entry: ['./main.js'],

  plugins: options.plugins.concat([
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'AUTH0_CLIENT_ID': JSON.stringify(process.env.AUTH0_CLIENT_ID || ''),
        'AUTH0_URL': JSON.stringify(process.env.AUTH0_URL || ''),
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
  ]),

  output: Object.assign({
    path:       paths.output,
  }, options.output),

  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.js']
  },

  devServer: options.devServer,

  postcss: () => [
    require('postcss-focus')(),
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    require('postcss-reporter')({
      clearMessages: true,
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: options.cssLoaders
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpg|png)$/,
        loaders: [
          'file-loader',
          'image-webpack-loader'
        ]
      },
      {
        test: /node_modules[\\\/]auth0-lock[\\\/].*\.js$/,
        loaders: [
          'transform-loader/cacheable?brfs',
          'transform-loader/cacheable?packageify'
        ]
      }, 
      {
        test: /node_modules[\\\/]auth0-lock[\\\/].*\.ejs$/,
        loader: 'transform-loader/cacheable?ejsify'
      }, 
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
})
