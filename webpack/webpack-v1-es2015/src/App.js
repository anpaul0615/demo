import Hello from './Hello';

let html = '<h1>Hello</h1>';
for (let i of [1,2,3]) {
  html += `${i} :: ${Hello.greeting}`;
  html += '<br/>';
}

document.body.innerHTML = html;
