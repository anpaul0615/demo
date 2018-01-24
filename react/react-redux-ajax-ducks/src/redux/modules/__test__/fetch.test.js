import 'babel-polyfill';
import 'isomorphic-fetch';

test('Fetch API Test', async ()=>{
    let url = `https://jsonplaceholder.typicode.com/posts/1`;
    let target = await fetch(url).then(response=>response.json());
    expect(target.id).toBe(1);
});
