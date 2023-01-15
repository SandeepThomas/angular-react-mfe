const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  webpack: {
    configure: {
      entry: './src/index.tsx',
      output: {
        filename: 'bundle.js',
        publicPath: 'auto',
        uniqueName: 'mfe4',
      },
      optimization: {
        runtimeChunk: false,
        splitChunks: {
          chunks(chunk) {
            return false;
          },
        },
      },
      plugins: [
        new ModuleFederationPlugin({
          // For remotes (please adjust)
          name: 'react',
          library: { type: 'var', name: 'craco' },
          filename: 'remoteEntry.js', // <-- Meta Data
          exposes: {
            './craco-component': './src/App.tsx',
          },
        }),
      ],
    },
  },
};
