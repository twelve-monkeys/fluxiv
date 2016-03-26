var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    target: "web",
    output: {
        path: path.join(__dirname, "lib"),
        filename: "fluxiv-nodejs.js",
        library: '',
        libraryTarget: 'commonjs'
    },
    entry: "./fluxiv.ts",
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