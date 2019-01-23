import Assert from 'assert';
import App from '../App.js';

(async function() {
  try {
    const app = new App();
    const result = await app.getProperties();

    const { name, components } = result;

    Assert.equal(name, 'test-app');
    Assert.equal(components, [ 'comA', 'comB', 'comC', ]);
    Assert.strictEqual(components, [ 'comA', 'comB', 'comC', ]);

  } catch(e) {
    console.log(e);

  }

})();
