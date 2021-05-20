const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

const compiler = webpack(webpackConfig);

compiler.run((error) => {
    if (error) {
        console.log('Compilation failed: ', error);
    }
    compiler.watch({
        ignored: ['**/node_modules/', '**/dist'],
    }, (err) => {
        if (err) {
            console.log('Compilation failed: ', err);
            return false;
        }
        console.log('Compilation was succesfull');
    });
    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client'),
        ],
    })
})