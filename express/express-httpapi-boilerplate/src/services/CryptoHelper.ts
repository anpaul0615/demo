import Crypto from 'crypto';

const {
  PHKDF2_ITERATIONS, PHKDF2_KEYLEN, PHKDF2_DIGEST
} = process.env;


export const hashFromPbkdf2 = (data:any):Promise<string> => {
  return new Promise((resolve, reject) => {
    const { password, salt } = data;
    Crypto.pbkdf2(
      password,
      salt,
      Number(PHKDF2_ITERATIONS),
      Number(PHKDF2_KEYLEN),
      PHKDF2_DIGEST,
      (err, output) => {
        if (err) reject(err);
        else resolve(output.toString('base64'));
      });
  });
};
