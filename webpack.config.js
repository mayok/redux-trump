var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader' )
      },
      {
        test: /\.(gif|png)$/i,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(gif|png)$/i,
        loader: 'file?hash=sha512&digest=hex&name=[path][name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("app.css", { allChunks: true })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    contentBase: './dist',
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
