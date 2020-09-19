const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    compress: true,
    port: 8050
  },
  module: {
    rules: [{
     test: /\.scss$/,
     use: [
    "style-loader", // creates style nodes from JS strings
    "css-loader", // translates CSS into CommonJS
    "sass-loader" // compiles Sass to CSS, using Node Sass by default
     ]
    }]
  }
};