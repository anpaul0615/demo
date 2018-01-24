module.exports = {
     entry: './src/App.js',
     output: {
         path: './bin',
         filename: 'App.bundle.js'
     },
     module: {
       loaders: [
         {
           test: /\.js$/,
           loader: 'babel-loader',
           exclude: /node_modules/,
           query: {
             presets: ['es2015']
           }
         }
       ]
     }
 };
