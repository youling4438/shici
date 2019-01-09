const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: __dirname + "/build",
        filename: "bundle-[hash].js"
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
            {
                test: /\.svg$/,
                use: ['file-loader'],
            },
        ],
    },
    devServer: {
        port: 3000,
        hot: true,
    },
}
