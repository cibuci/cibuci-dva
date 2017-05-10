import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';

import {
  fetchTopics,
  fetchTopic,
  fetchHotTopics,
  fetchNoReplyTopics,
  addTopic,
} from '../../services/cibuci';

export default {

  namespace: 'topic',

  state: {
    type: 'all',
    current: null,
    list: [],
    total: 0,
    page: 1,
    hot: [],
    noreply: [],
    currentTabId: 'all',
    tabs: [
      { id: 'all', name: '全部' },
      { id: 'good', name: '精华' },
      { id: 'share', name: '分享' },
      { id: 'ask', name: '问答' },
      { id: 'job', name: '招聘' },
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
          }
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
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

    * fetchItem({ payload }, { put, call }) {
      const { id } = payload;
      const item = yield call(fetchTopic, id);
      yield put({ type: 'saveItem', payload: item.data });
    },

    * addItem({ payload }, { put, call }) {  // eslint-disable-line
      yield call(addTopic, payload);
      yield put(routerRedux.push('/topic'));
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
