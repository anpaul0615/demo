"use strict";

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async function () {
  try {
    const app = new _App.default();
    const result = await app.getProperties();
    const {
      name,
      components
    } = result;
    const [item1, item2, item3] = components;
    console.log(name, components);
    console.log(item1, item2, item3);
  } catch (e) {
    console.log(e);
  }
})();