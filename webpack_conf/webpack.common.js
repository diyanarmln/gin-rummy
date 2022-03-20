const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/script.js', './src/styles.css'],
  },
  plugins: [new MiniCssExtractPlugin()],
  output: {
    filename: '[name]-[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        // this is regex, it tells webpack to look for files that end with .css
        test: /\.css$/,
        // the sequence here matters! style-loader needs to come before css-loader
        // because webpack reads these things from right to left
        use: [
          "style-loader",   // step 2: injects Javascript into the DOM
          "css-loader",   // step 1: turns css into valid Javascript
      ]
      }, 
    ],
  },
};