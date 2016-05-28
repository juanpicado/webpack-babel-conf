var DefaultConfig = require('webpack-simple-conf');
var _ = require('lodash');

var babelConf = {
    module: {
        loaders: [
          {
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }
        ]
    }
};

module.exports = function(params) {
    return _.merge(DefaultConfig(...params), babelConf);
};
