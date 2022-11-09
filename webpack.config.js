const path = require("path")

module.exports = {
  entry: "./FrontEnd/src/index.jsx",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "FrontEnd/src/"),
    filename: "bundled.js"
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "FrontEnd/src/")
    },
    hot: true,
    liveReload: true,
    historyApiFallback: { index: "index.html" }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      }
    ]
  }
}

// console.log(path.resolve(__dirname, "App"))