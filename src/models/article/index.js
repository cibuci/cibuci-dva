import pathToRegexp from 'path-to-regexp';
import { fetchArticles, fetchArticle } from '../../services/cibuci';

export default {

  namespace: 'article',

  state: {
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
        const match = pathToRegexp('/article').exec(pathname);
        if (match) {
          fetchList();
        }
      });
    },

    item({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/article/:itemId').exec(pathname);
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
      const list = yield call(fetchArticles);
      yield put({ type: 'saveList', payload: list.data });
    },

    * fetchItem({ payload }, { put, call }) {
      const { id } = payload;
      const item = yield call(fetchArticle, id);
      yield put({ type: 'saveItem', payload: item.data });
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
