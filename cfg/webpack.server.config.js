const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    target: 'node',
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server/'),
        filename: "server.js",
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.tsx', '.jsx', '.js', '.ts', '.json'],
    },
    module: {
        rules: [{
            test: /\.[jt]sx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                "presets": [
                    "@babel/preset-env",
                    "@babel/preset-react",
                    "@babel/preset-typescript"
                ],
                "plugins": [
                    "@babel/proposal-class-properties",
                    "@babel/proposal-object-rest-spread",
                    "@babel/plugin-transform-react-jsx",
                    "@babel/plugin-syntax-jsx"
                ]
            },
        }],
    },
    optimization: {
        minimize: false,
    },
};