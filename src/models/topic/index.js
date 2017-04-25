import pathToRegexp from 'path-to-regexp';
import { fetchTopics, fetchTopic } from '../../services/cnode';

export default {

  namespace: 'topic',

  state: {
    type: 'the select',
    current: null,
    list: [],
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
      // const { type, page } = payload;
      const list = yield call(fetchTopics);
      yield put({ type: 'saveList', payload: list.data.data });
    },

    * fetchItem({ payload }, { put, call }) {
      const { id } = payload;
      const item = yield call(fetchTopic, id);
      yield put({ type: 'saveItem', payload: item.data.data });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },

    saveList(state, { payload: items }) {
      return { ...state, list: items };
    },

    saveItem(state, { payload: item }) {
      return { ...state, current: item };
    },
  },

};
