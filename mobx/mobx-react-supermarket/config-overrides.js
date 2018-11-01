const { injectBabelPlugin } = require('react-app-rewired');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['@babel/plugin-proposal-decorators', { 'legacy': true }], config);
  return config;
}
