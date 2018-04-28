const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config({path: __dirname + '/.env'});

if (!dotenv.parsed || !dotenv.parsed.SMART_CLIENT_ID) {
  console.warn('No SMART_CLIENT_ID specified.  Defaulting to 6c12dff4-24e7-4475-a742-b08972c4ea27.');
}

module.exports = {
  entry: {
    launch: './src/launch.js',
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js' ,
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'SMART_CLIENT_ID': dotenv.parsed && dotenv.parsed.SMART_CLIENT_ID ? JSON.stringify(dotenv.parsed.SMART_CLIENT_ID) : undefined
      }
    })
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  node: {
    fs: "empty"
  }
};