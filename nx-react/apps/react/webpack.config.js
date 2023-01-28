const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const { withModuleFederation } = require('@nrwl/react/module-federation');

const baseConfig = require('./module-federation.config');

const config = {
  ...baseConfig,
};

const changeModuleFederationToScript = () => {
  return (config, ctx) => {
    for (let plugin of config.plugins) {
      if (plugin instanceof ModuleFederationPlugin) {
        plugin._options.library = {
          type: 'var',
          name: plugin._options.name,
        };
      }
    }
    config.output.scriptType = 'text/javascript';
    return config;
  };
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config),
  changeModuleFederationToScript()
);
