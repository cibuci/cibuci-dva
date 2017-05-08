import loopbackRestClient from 'aor-loopback';

const restClient = loopbackRestClient('https://api.cibuci.com/api');

export function fetchUser(id) {
  return restClient('GET_ONE', 'users', { id });
}

export function fetchArticles(type, page) {
  const params = {
    pagination: {
      page,
      perPage: 3,
    },
    sort: {
      field: 'createdAt',
      order: 'DESC',
    },
    filter: {
    },
  };
  return restClient('GET_LIST', 'articles', params);
}

export function fetchArticle(id) {
  return restClient('GET_ONE', 'articles', { id });
}
