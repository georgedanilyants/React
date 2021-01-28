const path = require("path");

    module.exports = {
      entry: "./src/index.jsx",
      output: {
        filename: "app.js",
        path: path.join(__dirname, "public")
      },
      module: {
        rules: [
          {
            loader: "babel-loader",
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                [
                  "@babel/plugin-proposal-class-properties",
                  {
                    "loose": true
                  }
                ]
              ]
            }
          },
          {
            test: /\.css$/,
            loader: "style-loader!css-loader"
          }
        ]
      },
      mode: "development",
      devServer: {
        contentBase: path.join(__dirname, "public")
      }
    };