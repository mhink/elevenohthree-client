const path = require('path')

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

  plugins: options.plugins,

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
        test: /\.(jpg|png)$/,
        loaders: [
          'file-loader',
          'image-webpack-loader'
        ]
      }
    ]
  },
})
