import loopbackRestClient from '../utils/loopback/';

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
    include: [
      'author',
    ],
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

export function fetchNoReplyTopics() {
  const params = {
    pagination: {
      page: 1,
      perPage: 5,
    },
    sort: {
      field: 'createdAt',
      order: 'DESC',
    },
    filter: {
      commentsCount: 0,
    },
  };

  return restClient('GET_LIST', 'topics', params);
}

export function fetchTopic(id) {
  const params = {
    id,
    include: [
      'author',
    ],
  };
  return restClient('GET_ONE', 'topics', params);
}

export function fetchTopicComments(id) {
  const params = {
    pagination: {
      page: 1,
      perPage: 20,
    },
    sort: {
      field: 'createdAt',
      order: 'DESC',
    },
    filter: {
      topicId: id,
    },
    include: [
      'author',
    ],
  };
  return restClient('GET_LIST', 'topiccomments', params);
}

export function addTopic(item) {
  return restClient('CREATE', 'topics', { data: item });
}

export function addTopicComment({ content, current }) {
  const params = {
    data: {
      content,
      topicId: current.id,
    },
  };
  return restClient('CREATE', 'topiccomments', params);
}

export function fetchPks() {
  const params = {
    pagination: {
      page: 1,
      perPage: 1,
    },
    sort: {
      field: 'createdAt',
      order: 'DESC',
    },
  };

  return restClient('GET_LIST', 'argues', params);
}

export function fetchPkComments(pkId, page = 1) {
  const params = {
    id: pkId,
    target: 'argueId',
    pagination: {
      page,
      perPage: 20,
    },
    sort: {
      field: 'createdAt',
      order: 'DESC',
    },
    include: [
      'author',
    ],
  };

  return restClient('GET_MANY_REFERENCE', 'arguecomments', params);
}

export function addPkComment({ content, point, current }) {
  const params = {
    data: {
      content,
      point,
      argueId: current.id,
      createdAt: new Date(),
    },
  };

  return restClient('CREATE', 'arguecomments', params);
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
    fields: {
      title: true,
      summary: true,
      id: true,
      createdAt: true,
      cover: true,
      authorId: true,
    },
    include: [
      'author',
    ],
  };

  return restClient('GET_LIST', 'articles', params);
}

export function fetchArticle(id) {
  const params = {
    id,
    include: [
      'author',
    ],
  };
  return restClient('GET_ONE', 'articles', params);
}

export function fetchUsers(ids) {
  return restClient('GET_MANY', 'users', { ids });
}
