const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    minify:false,
  },
  plugins: [new HtmlWebpackPlugin({
    'meta': {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
        // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        'link': 'rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"',
        

        'title':"Euphoria Network"
      },
    'config':{
        minify:false,
    }  })],
};