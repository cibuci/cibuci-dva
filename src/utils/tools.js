import crypto from 'crypto';

export function hash(email) {
  return crypto.createHash('md5').update(email).digest('hex');
}
