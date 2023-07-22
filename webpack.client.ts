import * as path from "path";
import type { Configuration as WebpackConfiguration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { IS_DEV } from "./src/client/lib/constant";

const devServer: DevServerConfiguration = {
  hot: true,
  host: "localhost",
  port: 3000,
};

const config: WebpackConfiguration = {
  mode: IS_DEV ? "development" : "production",
  entry: "./src/client/index.tsx",
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist", "client"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: "/node_modules",
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "client", "index.html"),
      favicon: path.resolve(
        __dirname,
        "src",
        "client",
        "assets",
        "favicon.ico"
      ),
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: devServer,
};

export default config;
