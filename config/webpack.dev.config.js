const host = "0.0.0.0"
const port = "8080"

require('dotenv').config()

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
  plugins: [],
  cssLoaders: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
})
