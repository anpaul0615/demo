"use strict";

const Crypto = require('crypto');
const ALGORITHM = 'aes192';
const PASSWORD = Buffer.from('anpaul0615', 'latin1'); // must be either a 'latin1' encoded string or a Buffer.

const PLAIN_TEXT = '동해물과 백두산이 마르고 닳도록';

const CIPHER_INPUT_ENCODING = 'utf8';     // utf8, ascii, latin1
const CIPHER_OUTPUT_ENCODING = 'base64';  // latin1, base64, hex
const DECIPHER_INPUT_ENCODING = 'base64'; // (=CIPHER_OUTPUT_ENCODING)
const DECIPHER_OUTPUT_ENCODING = 'utf8';  // (=CIPHER_INTPUT_ENCODING)

// encrypt (AES192 default block-size : 16byte)
let cipher = Crypto.createCipher(ALGORITHM, PASSWORD);
let cipher_output = cipher.update(PLAIN_TEXT, CIPHER_INPUT_ENCODING, CIPHER_OUTPUT_ENCODING);
cipher_output += cipher.final(CIPHER_OUTPUT_ENCODING);

// decrypt
let decipher = Crypto.createDecipher(ALGORITHM, PASSWORD);
let decipher_output = decipher.update(cipher_output, DECIPHER_INPUT_ENCODING, DECIPHER_OUTPUT_ENCODING);
decipher_output += decipher.final(DECIPHER_OUTPUT_ENCODING);

console.log('plain text : ', PLAIN_TEXT);
console.log('encrypt text : ', cipher_output);
console.log('decrypt text : ', decipher_output);
