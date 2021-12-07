const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['./src/index.js'],
  devServer: {
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000,
    },
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/u,
        exclude: /node_modules/u,
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/u,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|(ttf|otf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?)$/u,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/u,
      failOnError: false,
      cwd: process.cwd(),
    }),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    // alias: pathAlias,
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    compress: true,
    port: 9000,
  },
}