const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPWAManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new WebpackPWAManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      short_name: 'Petgram',
      description: 'Con petgram puedes encontrar fotos de animales domesticos muy facilmente.',
      background_color: '#FFF',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve(__dirname, 'src/assets/favicon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: /https:\/\/(res\.cloudinary\.com|images\.unsplash\.com)/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: /https:\/\/petgram-api-fpalombo\.now\.sh\//,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
    index: 'index.html',
    open: true
  }
}
