import LoopbackResource from '../utils/loopback/';
import request from '../utils/request';

const users = new LoopbackResource('users');
const topics = new LoopbackResource('topics');
const topiccomments = new LoopbackResource('topiccomments');
const argues = new LoopbackResource('argues');
const arguecomments = new LoopbackResource('arguecomments');
const articles = new LoopbackResource('articles');

export function fetchUser(id) {
  return users.getById({ id });
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

  return topics.getList(params);
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

  return topics.getList(params);
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

  return topics.getList(params);
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

  return topics.getList(params);
}

export function fetchTopic(id) {
  const params = { id };
  return topics.getById(params);
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
  return topiccomments.getList(params);
}

export function addTopic(item) {
  return topics.create({ data: item });
}

export function updateTopic(params) {
  return topics.updateById(params);
}

export function deleteTopic(params) {
  return topics.deleteById(params);
}

export function addTopicComment({ content, current }) {
  const params = {
    data: {
      content,
      topicId: current.id,
    },
  };
  return topiccomments.create(params);
}

export function updateTopicComment(params) {
  return topiccomments.updateById(params);
}

export function deleteTopicComment(params) {
  return topiccomments.deleteById(params);
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

  return argues.getList(params);
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

  return arguecomments.getManyReference(params);
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

  return arguecomments.create(params);
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

  return articles.getList(params);
}

export function fetchArticle(id) {
  const params = {
    id,
    include: [
      'author',
    ],
  };

  return articles.getById(params);
}

export function addArticle(item) {
  return articles.create({ data: item });
}

export function updateArticle(params) {
  return articles.updateById(params);
}

export function fetchUsers(ids) {
  return users.getMany({ ids });
}

export function findOneUser({ username }) {
  const params = {
    filter: {
      username,
    },
  };
  return users.findOne(params);
}

export function updateUser(params) {
  return users.updateById(params);
}

export function fetchUptoken(key) {
  const url = `https://api.cibuci.com/util/qiniu/token?file_name=${key}`;

  return request(url);
}
