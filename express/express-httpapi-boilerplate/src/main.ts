import FS from 'fs';
import Http from 'http';
import Https from 'https';
import Server from './Server';

const options = {
  key: FS.readFileSync('ssl-key.pem').toString(),
  cert: FS.readFileSync('ssl-csr.pem').toString(),
};

const { SERVER_PORT, SERVER_PORT_SSL } = process.env;


Http.createServer(Server).listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}!`);
});

Https.createServer(options, Server).listen(SERVER_PORT_SSL, () => {
  console.log(`Server listening on port ${SERVER_PORT_SSL}!`);
});
