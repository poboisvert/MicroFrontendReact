const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    // Global component that import others
    new ModuleFederationPlugin({
      name: 'container', // Not required
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        session: 'session@http://localhost:8082/remoteEntry.js', // path and rename sess: for container
        dashboard: 'dashboard@http://localhost:8083/remoteEntry.js',
      },
      // lin to import
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
