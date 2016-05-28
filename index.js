// return a basic webpack configuration

var config = require('./webpack.babel.conf');
console.log('config', config);
module.exports = function(params) {
    console.log('params', params);
    return config(...params);
};
