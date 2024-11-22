const path = require("node:path");

module.exports = {
  entry: "./handler.js",
  target: "node",
  externals: [
    "@node-rs/argon2",
    "@node-rs/bcrypt",
    "@node-rs/argon2-wasm32-wasi",
  ],
};
