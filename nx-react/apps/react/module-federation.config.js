module.exports = {
  name: "nxReact",
  type: "script",
  library: { type: "var", name: "nxReact" },
  filename: "remoteEntry.js", // <-- Meta Data
  exposes: {
    './web-component': './src/remote-entry.ts',
  },
};