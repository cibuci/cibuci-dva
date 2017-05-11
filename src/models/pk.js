import pathToRegexp from 'path-to-regexp';
import { fetchPks } from '../services/cibuci';

export default {

  namespace: 'pk',

  state: {
    current: null,
    list: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/').exec(pathname);
        if (match) {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },

  effects: {
    * fetch({ payload }, { call, put }) {  // eslint-disable-line
      const result = yield call(fetchPks);
      const list = result.data;
      const current = (list.length ? list[0] : null);
      yield put({ type: 'save', payload: { list, current } });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
