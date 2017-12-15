var webpack = require('webpack');
var path = require('path');

module.exports={
  entry:"./src/index.js",
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"app.js"
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          //'css-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
            //presets:["es2015","stage-2"]
          }

      },
    ]//end of rules
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
};//ebd if exorts
