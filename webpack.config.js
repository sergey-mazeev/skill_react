const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_SCSS_REGEXP = /global\.s[ac]ss$/;

function setupDevTool() {
    if (IS_DEV) {
        return 'eval';
    }
    return false;
}

module.exports = {
    resolve: {
        extensions: ['.tsx', '.jsx', '.js', '.ts', '.json'],
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['ts-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__local--[hash:base64:5]',
                            },
                        }
                    },
                    'sass-loader',
                ],
                exclude: path.resolve(__dirname, './src/styles/'),
            },
            {
                test: /\.s[ac]ss$/i,
                include: path.resolve(__dirname, './src/styles/'),
                exclude: path.resolve(__dirname, './src/styles/helpers/'),
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        port: 3000,
        open: false,
        hot: IS_DEV,
    },
    devtool: setupDevTool(),
};