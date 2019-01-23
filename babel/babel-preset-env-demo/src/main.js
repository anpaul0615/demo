import App from './App';

(async function() {
  try {
    const app = new App();
    const result = await app.getProperties();

    const { name, components } = result;
    const [ item1, item2, item3, ] = components;

    console.log(name, components);
    console.log(item1, item2, item3);

  } catch(e) {
    console.log(e);

  }

})();