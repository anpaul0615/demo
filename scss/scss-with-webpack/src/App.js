import './scss/Common.scss';
import './scss/App.scss';

const appDiv = document.createElement('div');
appDiv.id = 'app';
appDiv.innerHTML += '<p>greeting!!</p>';
appDiv.innerHTML += '<p class="foo">hello foo!!</p>';
appDiv.innerHTML += '<p class="bar">hello bar!!</p>';
document.body.appendChild(appDiv);
