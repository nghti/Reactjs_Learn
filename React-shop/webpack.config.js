/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        // query: { // use 'babel-preset-env' without transforming ES6 modules, and with added support for decorators
        //   presets: [['env', { modules: false }]],
        //   plugins: ['transform-class-properties', 'transform-decorators-legacy']
        // }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
// add this line
plugins: [
  HtmlWebpackPluginConfig,
  new ExtractTextPlugin('style.css')
]
}
