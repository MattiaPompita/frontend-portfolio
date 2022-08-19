const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devtool: false,
  devServer: { static: "./dist", watchFiles: ["src/*.html"], hot: true },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext]",
  },
});
