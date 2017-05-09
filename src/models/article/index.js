import pathToRegexp from 'path-to-regexp';
import { fetchArticles, fetchArticle } from '../../services/cibuci';

export default {

  namespace: 'article',

  state: {
    current: null,
    list: [],
    total: 0,
    page: 1,
    perPage: 20,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },

    list({ dispatch, history }) {
      let page = null;

      function fetchList(_page = 1) {
        page = _page;
        dispatch({ type: 'fetchList', payload: { page } });
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
    * fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },

    * fetchList({ payload }, { put, call }) {
      const { page } = payload;
      const list = yield call(fetchArticles, page);
      yield put({ type: 'saveList', payload: { ...list, page } });
    },

    * appendList({ payload }, { put, call }) {
      const { page } = payload;
      const list = yield call(fetchArticles, page);
      yield put({ type: 'append', payload: { ...list, page } });
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

    saveList(state, { payload }) {
      const { data, total, page } = payload;
      return { ...state, list: data, total, page };
    },

    append(state, { payload }) {
      const { data, total, page } = payload;
      const list = state.list.concat(data);
      return { ...state, list, total, page };
    },

    saveItem(state, { payload: item }) {
      return { ...state, current: item };
    },
  },

};
