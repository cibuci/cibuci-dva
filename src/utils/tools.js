import crypto from 'crypto';

export function hash(email) {
  return crypto.createHash('md5').update(email).digest('hex');
}

export function qiniuUrl(key) {
  return `http://cdn-qn0.cibuci.com/${key}`;
}

export function generateKey(userId) {
  return `community/avatar/${userId}/${Date.now()}`;
}
