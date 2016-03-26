var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.ts']
    },
    target: "web",
    output: {
        path: path.join(__dirname, "lib"),
        filename: "reactiv.js",
        library: 'reactiv',
        libraryTarget: 'amd'
    },
    entry: "./reactiv.ts",
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
        ]
    },
    plugins: [
        new ForkCheckerPlugin()
    ]
};