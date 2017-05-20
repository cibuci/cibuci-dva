import loopbackRestClient from '../utils/loopback/';
import request from '../utils/request';

const restClient = loopbackRestClient('https://api.cibuci.com/api');

export function fetchUser(id) {
  return restClient('GET_ONE', 'users', { id });
}

export function fetchTopics(tab, page) {
  const params = {
    pagination: {
      page,
      perPage: 20,
    },
    sort: {},
    fields: {
      title: true,
      tab: true,
      authorId: true,
      lastReplyerId: true,
      mark: true,
      rank: true,
      id: true,
      createdAt: true,
      lastReplyAt: true,
      commentsCount: true,
    },
    order: ['rank DESC', 'lastReplyAt DESC'],
    include: [
      'author',
      'lastReplyer',
    ],
  };

  if (tab !== 'all') {
    if (tab === 'good') {
      params.filter = { mark: 'good' };
    } else {
      params.filter = { tab };
    }
  }

  return restClient('GET_LIST', 'topics', params);
}

export function fetchHotTopics() {
  const params = {
    pagination: {
      page: 1,
      perPage: 10,
    },
    fields: {
      title: true,
      id: true,
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
    fields: {
      title: true,
      id: true,
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

export function fetchAuthorTopics(userId) {
  const params = {
    pagination: {
      page: 1,
      perPage: 20,
    },
    fields: {
      title: true,
      id: true,
    },
    sort: {
      field: 'createdAt',
      order: 'DESC',
    },
    filter: {
      authorId: userId,
    },
  };

  return restClient('GET_LIST', 'topics', params);
}

export function fetchTopic(id) {
  const params = { id };
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

export function updateTopic(params) {
  return restClient('UPDATE', 'topics', params);
}

export function deleteTopic(params) {
  return restClient('DELETE', 'topics', params);
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

export function updateTopicComment(params) {
  return restClient('UPDATE', 'topiccomments', params);
}

export function deleteTopicComment(params) {
  return restClient('DELETE', 'topiccomments', params);
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
      perPage: 30,
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
      readCount: true,
      sourceName: true,
      sourceUrl: true,
    },
    include: [
      'author',
    ],
    filter: {
      status: 'published',
    },
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

export function addArticle(item) {
  return restClient('CREATE', 'articles', { data: item });
}

export function updateArticle(params) {
  return restClient('UPDATE', 'articles', params);
}

export function fetchUsers(ids) {
  return restClient('GET_MANY', 'users', { ids });
}

export function findOneUser({ username }) {
  const params = {
    filter: {
      username,
    },
  };
  return restClient('FIND_ONE', 'users', params);
}

export function updateUser(params) {
  return restClient('UPDATE', 'users', params);
}

export function fetchUptoken(key) {
  const url = `https://api.cibuci.com/util/qiniu/token?file_name=${key}`;

  return request(url);
}
