module.exports = {
  require: "ts-node/register",
  spec: "test/**/*.ts",
  reporter: "spec",  // list, dot, spec
  ui: "bdd",  // tdd, bdd
  slow: 75,  // 75ms is default
  timeout: 3000,  // 2000ms is default
  watch: false,
  extension: [ "ts" ],
};
