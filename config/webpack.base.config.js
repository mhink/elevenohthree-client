const path = require('path')

const paths = {
  source:   path.resolve('src'),
  output:   path.resolve('dist'),
  modules:  path.resolve('node_modules')
}

module.exports = (options) => ({
  context: paths.source,
  entry: ['./main.js'],
  plugins: options.plugins,
  output: Object.assign({
    path:       paths.output,
  }, options.output),
  resolve: {
    modules: [paths.source, paths.modules],
    extensions: ['', '.js']
  },

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
      }
    ]
  }
})
