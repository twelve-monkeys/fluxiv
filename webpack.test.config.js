var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.ts', '.tsx', '.webpack.js', '.web.js']
    },

    devtool: 'inline-source-map',

    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },

    entry: {
        test: "./spec/dom/Spec.ts"
    },
    
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.tsx$/,
                loader: 'babel-loader!awesome-typescript-loader?useBabel=false&forkChecker=true'
            }
            //   ,
            //   {
            //     test: /\.jsx$/,
            //     loader: 'babel-loader'
            //   }
        ]
    },
    plugins: [
        new ForkCheckerPlugin(),
        // new ClosureCompilerPlugin({
        //   language_in: 'ECMASCRIPT6',
        //   language_out: 'ECMASCRIPT5',
        //   compilation_level: 'ADVANCED'
        // })
    ]
};