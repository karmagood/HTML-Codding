module.exports = {
    entry: './java_script/app',
    output: {
        filename: 'build/bundle.js'
    },

    watch: true,

    watchOptions: {
        aggregateTimeout:100
    },

    devtool: "source-map"

};
