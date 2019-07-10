import fs from 'fs';

export const SSL_KEY = fs.readFileSync('conf/ssl/key.pem');
export const SSL_CERT = fs.readFileSync('conf/ssl/csr.pem');
