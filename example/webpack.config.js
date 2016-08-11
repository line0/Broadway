var path = require('path');

module.exports = {
    entry: {
        app: ['./src/app.js'],
        decoder: ['./src/decoder.js'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/assets/',
        filename: '[name].js',
    },
};
