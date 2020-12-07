const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const { name: PACKAGE_NAME } = require('./package.json');
const CONTEXT_ROOT = '/app';

module.exports = {
  entry: {
    app: Path.resolve(__dirname, "src", "App.js"),
  },
  output: {
    path: Path.resolve(__dirname, "build"),
    publicPath: `${CONTEXT_ROOT}/`,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                ],
              },
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: `${PACKAGE_NAME}`,
      chunks: ['app'],
      filename: 'app.html',
      template: Path.join(__dirname, 'src', 'App.html'),
      CONTEXT_ROOT: `${CONTEXT_ROOT}`,
    }),
  ],
  devServer: {
    contentBase: Path.join(__dirname, 'build'),
    contentBasePublicPath: `${CONTEXT_ROOT}/`,
    publicPath: `${CONTEXT_ROOT}/`,
    watchContentBase: true,
    serveIndex: true,
    compress: true,
    port: 8080,
    host: '0.0.0.0',
  }
};
