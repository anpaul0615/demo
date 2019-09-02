module.exports = {
  require: "ts-node/register",
  spec: "**/*.test.ts",
  reporter: "list",  // list, dot, spec
  ui: "bdd",  // tdd, bdd
  slow: 75,  // 75ms is default
  timeout: 1000,  // 2000ms is default
  watch: true,
  extension: [ "ts" ],
};