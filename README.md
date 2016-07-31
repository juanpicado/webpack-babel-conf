## webpack-babel-conf

This module helps to reduce the overloaded webpack configuration using *babel* as a default loader, dependencies management.

    npm install webpack-babel-conf --save-dev

## Usage

1. Create a file in the root folder `webpack.conf.js` and add the following code.

````
    const configuration = require('webpack-babel-conf');
    const webpackConf = configuration(
    './src/index.js',
    './build,
    'index.min.js',
    'myAppFoo',
    'umd');
    module.exports = webpackConf;
````

2. Run webpack in the root folder `webpack --config webpack.conf.js`
3. Look the output file at `build/index.min.js`

#### Options

The module returns a function, it accepts 4 parameters.

1. The entry point file
2. The output name
3. The name of the library
4. The library target


This module extend [webpack-simple-conf](https://github.com/juanpicado/webpack-simple-conf)