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
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['es2015']
            }
          }
        ]
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