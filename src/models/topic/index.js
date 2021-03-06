import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';

import {
  fetchTopics,
  fetchTopic,
  fetchHotTopics,
  fetchNoReplyTopics,
  fetchAuthorTopics,
  addTopic,
  updateTopic,
  deleteTopic,
  fetchTopicComments,
  addTopicComment,
  updateTopicComment,
  deleteTopicComment,
  fetchUser,
} from '../../services/cibuci';

export default {

  namespace: 'topic',

  state: {
    type: 'all',
    current: null,
    comments: [],
    list: [],
    total: 0,
    page: 1,
    hot: [],
    noreply: [],
    author: [],
    currentTabId: 'all',
    tabs: [
      { id: 'all', name: '全部' },
      { id: 'good', name: '优质话题' },
      { id: 'share', name: '分享' },
      { id: 'ask', name: '提问' },
      { id: 'bb', name: '吐槽' },
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },

    list({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        const tab = query.tab || 'all';
        const page = parseInt(query.page, 10) || 1;

        const match = pathToRegexp('/topic').exec(pathname);
        if (match) {
          dispatch({ type: 'fetchList', payload: { tab, page } });
          dispatch({ type: 'fetchHot' });
        }
      });
    },

    item({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/topic/:itemId').exec(pathname);
        if (match) {
          const id = match[1];
          if (id !== 'add') {
            dispatch({ type: 'fetchItem', payload: { id } });
            dispatch({ type: 'fetchComments', payload: { id } });
          }
        }
      });
    },
  },

  effects: {
    * fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },

    * fetchList({ payload }, { put, call }) {
      const { tab, page } = payload;
      const list = yield call(fetchTopics, tab, page);
      yield put({ type: 'saveList', payload: { ...list, tab, page } });
    },

    * fetchHot({ payload }, { put, call }) {  // eslint-disable-line
      const list = yield call(fetchHotTopics);
      yield put({ type: 'save', payload: { hot: list.data } });
    },

    * fetchNoReply({ payload }, { put, call }) {
      const list = yield call(fetchNoReplyTopics);
      yield put({ type: 'save', payload: { noreply: list.data } });
    },

    * fetchAuthor({ payload }, { put, call }) {
      const { userId } = payload;
      const list = yield call(fetchAuthorTopics, userId);
      yield put({ type: 'save', payload: { author: list.data } });
    },

    * fetchItem({ payload }, { put, call }) {
      const { id } = payload;
      const item = yield call(fetchTopic, id);
      const author = yield call(fetchUser, item.data.authorId);
      const topic = { ...item.data, author: author.data };
      yield put({ type: 'saveItem', payload: topic });
    },

    * addItem({ payload }, { put, call }) {  // eslint-disable-line
      yield call(addTopic, payload);
      yield put(routerRedux.push('/topic'));
    },

    * editItem({ payload }, { put, call }) {  // eslint-disable-line
      yield call(updateTopic, payload);
      yield put(routerRedux.push(`/topic/${payload.id}`));
    },

    * removeItem({ payload }, { put, call }) {  // eslint-disable-line
      yield call(deleteTopic, payload);
      yield put(routerRedux.push('/topic'));
    },

    * fetchComments({ payload }, { put, call }) {  // eslint-disable-line
      const { id } = payload;
      const result = yield call(fetchTopicComments, id);
      yield put({ type: 'save', payload: { comments: result.data } });
    },

    * addComment({ payload }, { put, call }) {  // eslint-disable-line
      yield call(addTopicComment, payload);
      yield put({ type: 'fetchComments', payload: { id: payload.current.id } });
    },

    * editComment({ payload }, { put, call }) {
      const { id, data } = payload;
      yield call(updateTopicComment, { id, data });
      yield put({ type: 'fetchComments', payload: { id: payload.topicId } });
    },

    * removeComment({ payload }, { put, call }) {  // eslint-disable-line
      const { id } = payload;
      yield call(deleteTopicComment, { id });
      yield put({ type: 'fetchComments', payload: { id: payload.topicId } });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },

    saveList(state, { payload }) {
      const { data, total, tab, page } = payload;
      return { ...state, list: data, total, currentTabId: tab, page };
    },

    saveItem(state, { payload: item }) {
      return { ...state, current: item };
    },
  },

};
