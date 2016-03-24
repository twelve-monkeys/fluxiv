var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },

    devtool: 'inline-source-map',

    output: {
        path: __dirname,
        filename: "[name].js"
    },

    entry: {
        test: "./Spec"
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new ForkCheckerPlugin()
    ]
};