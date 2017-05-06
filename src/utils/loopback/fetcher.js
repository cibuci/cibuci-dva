import _ from 'lodash';
import fetch from 'dva/fetch';
import config from './config';

function getBaseUrl() {
  let baseUrl = config.get('baseUrl') || '';
  if (baseUrl.slice(-1) !== '/') {
    baseUrl += '/';
  }
  return baseUrl;
}

function buildUrl(endpoint, filter) {
  const baseUrl = getBaseUrl();
  let url = baseUrl + endpoint;
  if (filter) {
    url += `?filter${encodeURIComponent(JSON.stringify(filter))}`;
  }
  const token = config.get('access_token') || '';
  if (token) {
    url += filter ? '&' : '?';
    url += `access_token=${token}`;
  }
  return url;
}

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

export default function fetcher(options) {
  const endpoint = options.endpoint;
  const filter = options.filter;

  const url = buildUrl(endpoint, filter);

  return fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
