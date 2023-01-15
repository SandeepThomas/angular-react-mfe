module.exports = {
  name: "react",
  library: { type: "var", name: "react" },
  filename: "remoteEntry.js", // <-- Meta Data
  exposes: {
    './web-component': './src/remote-entry.ts',
  },
};