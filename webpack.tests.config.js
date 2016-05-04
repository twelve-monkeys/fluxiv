var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },
    output: {
        path: path.join(__dirname, "lib"),
        filename: "tests.js"
    },
    entry: {
        test: "./src/tests/dom/Spec"
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