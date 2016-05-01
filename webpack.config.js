module.exports = {
  entry: './App.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  module: {
    loaders : [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
        }
      }
    ]
  }
}
