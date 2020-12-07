const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  target: [ 'web', 'es5' ],
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, './lib')
  },
  resolve: {
    extensions: [ '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: 'current'
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
}
