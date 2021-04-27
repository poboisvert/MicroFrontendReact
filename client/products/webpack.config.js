const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'products', // temp name
      filename: 'remoteEntry.js', // Name in manifest
      exposes: {
        './ProductsIndex': './src/bootstrap', // Set config to export - Alias/Rename Name
      },
      shared: ['faker'],
    }),
  ],
};
