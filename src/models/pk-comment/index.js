import {
  fetchPkComments,
  addPkComment,
} from '../../services/cibuci';

export default {

  namespace: 'pkcomment',

  state: {
    list: [],
    page: 1,
    total: 0,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    * fetch({ payload }, { call, put }) {  // eslint-disable-line
      const { pkId, page } = payload;
      const { data, total } = yield call(fetchPkComments, pkId, page);
      yield put({ type: 'save', payload: { list: data, total, page } });
    },

    * append({ payload }, { call, put }) {  // eslint-disable-line
      const { pkId, page } = payload;
      const { data, total } = yield call(fetchPkComments, pkId, page);
      yield put({ type: 'concat', payload: { data, total, page } });
    },

    * add({ payload }, { put, call }) {  // eslint-disable-line
      yield call(addPkComment, payload);

      // refresh comments.
      yield put({ type: 'fetch', payload: { pkId: payload.current.id, page: 1 } });
      // refresh pk.
      yield put({ type: 'pk/fetch' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },

    concat(state, { payload }) {
      const { data, total, page } = payload;
      const list = state.list.concat(data);
      return { ...state, list, total, page };
    },
  },

};
