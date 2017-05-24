import qs from 'querystring';
import fetch from 'dva/fetch';
import storage from './storage';

class HttpError extends Error {
  constructor(message, status, body) {
    super(message);
    this.message = message;
    this.status = status;
    this.body = body;
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
    this.stack = new Error().stack;
  }
}

function parseResponse(response) {
  return response.text().then(text => ({
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    body: text,
  }));
}

function checkStatus({ status, statusText, headers, body }) {
  let json = {};
  if (body) {
    json = JSON.parse(body);
  }
  if (status >= 200 && status < 300) {
    return { status, headers, body, json };
  }

  const error = new HttpError((json && json.error && json.error.message) || statusText,
    status,
    json);
  throw error;
}

const host = 'https://api.cibuci.com/api'; // 'http://localhost:4000/api';

export default function (api, params = {}, method = 'GET', withoutToken = false) {
  const { query, body, selfToken } = params;

  const finalQuery = { filter: JSON.stringify(query) };
  if (!withoutToken) {
    const token = storage.load('lbtoken');
    if (token) finalQuery.access_token = token;
  }

  if (selfToken) {
    finalQuery.access_token = selfToken;
  }

  const url = `${host}${api}?${qs.stringify(finalQuery)}`;

  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (body) options.body = JSON.stringify(body);

  return fetch(url, options)
    .then(parseResponse)
    .then(checkStatus);
}
