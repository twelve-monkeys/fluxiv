var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
    resolve: {
        extensions: ['', '.ts']
    },
    target: "web",
    output: {
        path: __dirname,
        filename: "index.js",
        library: 'shared-components',
        libraryTarget: 'umd'
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