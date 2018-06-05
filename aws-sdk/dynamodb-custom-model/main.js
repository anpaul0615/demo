import InitModels from './models/__init__';

(async function(){

    // Init
    const Models = await InitModels();
    const { Movie } = Models;

    // Test
    const testDML = require('./main-dml.js')(Movie);
    console.log(testDML);
})();