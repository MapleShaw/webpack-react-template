const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin')
const path = require('path')
const deps = require('./package.json').dependencies

module.exports = {
  entry: {
    main: path.join(__dirname, './src/bootstrap.tsx'),
  },

  mode: 'development',

  devServer: {
    // directory: path.join(__dirname, 'public'),

    static: path.join(__dirname, 'dist'),
    port: <%= port %>,
  },
  output: {
    // publicPath: 'auto',
    path: path.join(__dirname, '/dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /.tsx?$/,
        // loader: 'ts-loader',
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: '<%= name %>',
      filename: 'entry.js',
      exposes: {
        './app': './src/app',
      },
      shared: {
        react: { singleton: true, requiredVersion: deps['react'] }, //,eager: true, requiredVersion: deps['react']
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
          //   eager: true,
        }, //, requiredVersion: deps['react-dom']
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
