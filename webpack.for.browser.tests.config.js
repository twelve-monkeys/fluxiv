var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },

    devtool: 'inline-source-map',

    output: {
        path: path.join(__dirname, "test/lib"),
        filename: "tests-browser.js"
    },

    entry: {
        test: "./test/dom/Spec"
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