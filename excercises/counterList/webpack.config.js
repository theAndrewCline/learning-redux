const path = require('path')

module.exports = {
    entry: './src/index.js', 
    output: {
        filename: 'main.min.js', 
        path: path.resolve(__dirname, 'dist')
    }, 
    devServer: { 
        contentBase: 'dist', 
        port: 3000
    }, 
    devtool: 'inline-source-map',
    module: {
        test: /\.js/, 
        exclude: /node_modules/, 
        loader: 'babel-loader'
    }
}