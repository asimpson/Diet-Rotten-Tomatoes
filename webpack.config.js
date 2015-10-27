var webpack = require('webpack');

module.exports = {
  entry: [
    './components/Root.js'
  ],
  output: {
    path: __dirname,
    filename: "rt.js"
  }, 
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
};
