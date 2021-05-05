const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/sess/latest/', // s3/cloudfront
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'sess',
      filename: 'remoteEntry.js',
      exposes: {
        './SessApp': './src/bootstrap', // Rename to import
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
