import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

export default {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.css/,
        loader: 'style?sourceMap!css?modules&importLoaders=1&localIdentName=[path]_[name]_[local]_[hash:base64:5]'
      }, {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.svg$/,
        loader: 'file'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({template: 'index.html'})]
}
