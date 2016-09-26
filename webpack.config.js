var webpack = require('webpack');
//var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    app: ['./client/app.js'],
    test: ['./client/test.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        //exclude: /node_modules/,
        include: /client/,
        loader: 'babel-loader',
        query: {
          // https://github.com/babel/babel-loader#options
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  }

};

/*
module.exports = {
  entry: {
    app: './client/app.js'
  },
  output: {
    path: './public/',
    filename: '[name].js'
    //inject: true
    //devtoolLineToLine: true,
  },
  //devtool: 'eval',
  //devtool: 'eval-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
    //new HtmlWebpackPlugin({
    //  title: 'test',
    //  //filename: 'assets/admin.html',
    //  template: 'client/index.ejs',
    //  inject: true
    //})
  ],
  module: {
    loaders: [
      {
        //test: /\.es6$/,
        test: /\.js$/,
        //test: path.join(__dirname, 'src_browser'),
        //exclude: /(node_modules)/,
        //exclude: /node_modules/,
        include: /client/,
        loader: 'babel-loader',
        query: {
          // https://github.com/babel/babel-loader#options
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  }
};
*/
