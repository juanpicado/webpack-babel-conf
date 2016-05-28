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
                presets: ['es2015']
            }
        }
        ]
    }
};

module.exports = function() {
    return _.merge(DefaultConfig.call(null, ...arguments), babelConf);
};
