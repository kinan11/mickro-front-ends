const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  plugins: [
    new ModuleFederationPlugin({
      remotes: {},
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/common/http': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
        ...sharedMappings.getDescriptors(),
      },
      remotes: {
        // Ensure that you use the port you specified in the configuration.
        // Also the name must match what you declared in the admin module.
        admin: 'admin@http://localhost:3000/remoteEntry.js',
        dashboard: 'dashboard@http://localhost:3400/remoteEntry.js',
    },
    }),
    sharedMappings.getPlugin(),
  ],

  // remotes: [
  //     ['admin', 'admin@http://localhost:3000/remoteEntry.js'],
  // ]
});
