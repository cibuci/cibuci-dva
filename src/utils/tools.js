import crypto from 'crypto';
import uuidV4 from 'uuid/v4';

export function hash(email) {
  return crypto.createHash('md5').update(email).digest('hex');
}

export function qiniuUrl(key) {
  return `http://cdn-qn0.cibuci.com/${key}`;
}

export function generateKey(userId) {
  return `community/user/${userId}/avatar/${uuidV4()}`;
}

export function generateContentKey(resource) {
  return `community/${resource}/${Date.now()}/content/${uuidV4()}`;
}

export function isAdmin(user) {
  if (!user) return false;
  return user.id === '5902067be8b73a6cb192e0d6';
}

export function isAuthor(user, author) {
  if (!user || !author) return false;
  return user.id === author.id;
}
