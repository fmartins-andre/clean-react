const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const stylesHandler = 'style-loader'

const config = {
  entry: './src/main/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    historyApiFallback: true,
    open: true,
    host: 'localhost',
    devMiddleware: {
      writeToDisk: true
    }
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/']
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW())
  } else {
    config.mode = 'development'
  }
  return config
}
