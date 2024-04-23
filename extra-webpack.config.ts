import * as webpack from 'webpack';
import { CustomWebpackBrowserSchema, TargetOptions } from '@angular-builders/custom-webpack';
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

export default (
    config: webpack.Configuration,
    options: CustomWebpackBrowserSchema,
    targetOptions: TargetOptions
) => {
    if (config.module && config.module.rules) {
        config.module.rules.push(

            {
              test : /\.css$/,
              include : /node_modules/,
              use : [
                  MiniCssExtractPlugin.loader,
                  "css-loader"
              ]
            }
        );
    }

    // or if you need plugins
    if (config.plugins) {
        config.plugins.push(
            new MiniCssExtractPlugin({
              filename : "[name].css"
            }),
        );
    }


  return config;
}
