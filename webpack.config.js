const webpack = require('webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'ify-loader',
          'transform-loader?plotly.js/tasks/util/compress_attributes.js',
        ]
      }
    ]
  },
  plugins : [
    new webpack.IgnorePlugin(/vertx/)
  ]
};
