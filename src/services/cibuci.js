import { fetcher, config } from '../utils/loopback/';
//
// // set base url for calling cibuci api.
config.set('baseUrl', 'https://api.cibuci.com/api');
config.set('access_token', 'OZ4g3s88rp4HBcFDNuCcnUC6nIllX6nrCSpWkBjrdQmtiJBq71YEEU7SzUZP6VcT');

export function fetchArticles() {
  return fetcher({
    endpoint: 'articles',
  });
}
