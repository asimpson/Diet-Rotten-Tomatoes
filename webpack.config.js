module.exports = {
  entry: "./app.js",
  output: {
    path: './build',
    filename: "rt.js"
  }, 
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/,
        loader: 'babel!jsx-loader'
      }
    ]
  }
};
