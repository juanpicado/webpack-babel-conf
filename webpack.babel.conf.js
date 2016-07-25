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
                plugins: [
                  'transform-object-rest-spread',
                  'transform-exponentiation-operator',
                  'transform-async-to-generator',
                  'transform-exponentiation-operator'
                ],
                presets: ['es2015', 'stage-2', 'stage-3']
            }
        }
        ]
    }
};

module.exports = function() {
    return _.merge(DefaultConfig.call(null, ...arguments), babelConf);
};
