var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./src/generate.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
}