import fetch from 'dva/fetch';
import storage from './storage';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function login(params) {
  const url = 'https://api.cibuci.com/api/users/login';
  const { username, password } = params;
  const options = {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(err => ({ err }));
}

export function register(params) {
  const url = 'https://api.cibuci.com/api/users';
  const { username, email, password } = params;
  const options = {
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(err => ({ err }));
}

export function changePassword(params) {
  const token = storage.load('lbtoken');
  const url = `https://api.cibuci.com/api/users/change-password?access_token=${token}`;
  const { oldPassword, newPassword } = params;
  const options = {
    method: 'POST',
    body: JSON.stringify({ oldPassword, newPassword }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(err => ({ err }));
}
