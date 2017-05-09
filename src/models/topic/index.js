import pathToRegexp from 'path-to-regexp';
import { fetchTopics, fetchTopic, fetchHotTopics } from '../../services/cibuci';

export default {

  namespace: 'topic',

  state: {
    type: 'all',
    current: null,
    list: [],
    total: 0,
    page: 1,
    hot: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },

    list({ dispatch, history }) {
      let page = null;

      function fetchList(type, _page = 1) {
        page = _page;
        dispatch({ type: 'fetchList', payload: { type, page } });
      }

      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/topic').exec(pathname);
        if (match) {
          fetchList();
          dispatch({ type: 'fetchHot' });
        }
      });
    },

    item({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/topic/:itemId').exec(pathname);
        if (match) {
          const id = match[1];
          dispatch({ type: 'fetchItem', payload: { id } });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },

    * fetchList({ payload }, { put, call }) {
      const { type, page } = payload;
      const list = yield call(fetchTopics, type, page);
      yield put({ type: 'saveList', payload: { ...list, page } });
    },

    * fetchHot({ payload }, { put, call }) {  // eslint-disable-line
      const list = yield call(fetchHotTopics);
      yield put({ type: 'saveHot', payload: list });
    },

    * fetchItem({ payload }, { put, call }) {
      const { id } = payload;
      const item = yield call(fetchTopic, id);
      yield put({ type: 'saveItem', payload: item.data });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },

    saveHot(state, { payload }) {
      const { data } = payload;
      return { ...state, hot: data };
    },

    saveList(state, { payload }) {
      const { data, total, page } = payload;
      return { ...state, list: data, total, page };
    },

    saveItem(state, { payload: item }) {
      return { ...state, current: item };
    },
  },

};
