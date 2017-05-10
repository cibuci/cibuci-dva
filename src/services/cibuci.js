import loopbackRestClient from 'aor-loopback';

const restClient = loopbackRestClient('https://api.cibuci.com/api');

export function fetchUser(id) {
  return restClient('GET_ONE', 'users', { id });
}

export function fetchPk() {
  const params = {
    pagination: {
      page: 1,
      perPage: 1, // limit.
    },
  };

  return restClient('GET_LIST', 'argues', params);
}

export function fetchTopics(tab, page) {
  const params = {
    pagination: {
      page,
      perPage: 20,
    },
    sort: {
      field: 'createdAt',
      order: 'DESC',
    },
  };

  if (tab !== 'all') {
    params.filter = {
      tab,
    };
  }

  return restClient('GET_LIST', 'topics', params);
}

export function fetchHotTopics() {
  const params = {
    pagination: {
      page: 1,
      perPage: 10,
    },
    sort: {
      field: 'commentsCount',
      order: 'DESC',
    },
  };

  return restClient('GET_LIST', 'topics', params);
}

export function fetchTopic(id) {
  return restClient('GET_ONE', 'topics', { id });
}

export function fetchArticles(page) {
  const params = {
    pagination: {
      page,
      perPage: 20,
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
