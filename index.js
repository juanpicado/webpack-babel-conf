// return a basic webpack configuration

var config = require('./webpack.babel.conf');
module.exports = function() {
    return config.call(null, ...arguments);
};
