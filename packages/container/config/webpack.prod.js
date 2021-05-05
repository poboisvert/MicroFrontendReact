const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

// defined in CI/CD - Domain Name
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js', // cache busting file name
    publicPath: '/container/latest/', // this maps to the s3 folder structure we apply
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container', // technically optional - the host module
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
        session: `session@${domain}/session/latest/remoteEntry.js`,
        dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
