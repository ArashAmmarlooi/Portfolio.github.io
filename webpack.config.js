const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';
// const SRC_DIR = __dirname + '/src';
// const DIST_DIR = __dirname + '/dist';

module.exports = {
  entry: [
    path.resolve(__dirname, "src", "index.jsx"),
  ],
  output: {
    path: path.resolve(__dirname + "/dist"),
    // public_path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: { minimize: true }
        }
      }
    ]
  },
  resolve: {
    extensions: [".*", ".js", ".jsx"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname + "/public", 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname + "/src"),
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: 3000
  }
};
