const path = require('path');
module.exports = {
  entry: {
    App: path.resolve(__dirname, "src", "App.js"),
    App2: path.resolve(__dirname, "src", "App.js"),
    App3: path.resolve(__dirname, "src", "App.js")
  },
  output: {
    path: path.resolve(__dirname, "bin"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      //babel-loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      //css-loader, style-loader
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
      //...
    ]
  }
};
