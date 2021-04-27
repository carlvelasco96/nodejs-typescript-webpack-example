const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  entry: {
    main: "./src/index.ts"
  },
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  externals: {
    "saslprep": "require('saslprep')"
  }
}