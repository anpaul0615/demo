var path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "src", "App.js"),
  output: {
    path: path.resolve(__dirname, "bin"),
    publicPath: "/bin/",
    filename: "App.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
