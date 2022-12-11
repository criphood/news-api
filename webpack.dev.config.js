const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        // static: './',
        // contentBase: path.resolve(__dirname, './dist'),
        // contentBase: path.resolve(__dirname, './dist'),
    },
};
