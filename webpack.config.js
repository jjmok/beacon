const path = require('path');

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.resolve(__dirname , 'public'),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/public",
    port: 3000
  },
  mode: "development",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js/
      },
      {
        //looks for both css, scss
        test: /\.s?css/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}