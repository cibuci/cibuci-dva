import request from '../utils/request';

const host = 'https://cnodejs.org/api/v1';

export function fetchTopics() {
  return request(`${host}/topics`);
}

export function fetchTopic(id) {
  return request(`${host}/topic/${id}`);
}
