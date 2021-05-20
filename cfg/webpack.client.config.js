const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

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
    entry: path.resolve(__dirname, '../src/client/index.jsx'),
    output: {
        path: path.resolve(__dirname, '../dist/client/'),
        filename: 'client.js',
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
        }]
    },
    devtool: setupDevTool(),
};