module.exports = {
  entry: "./app.js",
  output: {
    path: './',
    filename: "rt.js"
  }, 
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
