const path = require('path')

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundled.js',
      path: path.resolve(__dirname, 'dist')
   },
   devtool: 'inline-source-map',
   devServer: {
      contentBase: './dist',
      port: 3000
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/, 
            use: {
                loader: "babel-loader"
            }
         }
      ]
   }
}
