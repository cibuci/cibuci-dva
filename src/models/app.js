import { routerRedux } from 'dva/router';
import storage from '../utils/storage';
import { login } from '../utils/auth';
import { fetchUser } from '../services/cibuci';

export default {

  namespace: 'app',

  state: {
    user: null,
    authorized: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      // load user info from localstorage.
      const token = storage.load('lbtoken');
      if (token) {
        const user = storage.load('lbuser');
        dispatch({ type: 'fetch', payload: { user } });
      }
    },
  },

  effects: {
    * fetch({ payload: { user } }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save', payload: { user, authorized: true } });
    },

    * login({ payload }, { call, put }) { // eslint-disable-line
      const { params } = payload;
      const result = yield call(login, params);
      const { id, ttl } = result;
      storage.save('lbtoken', id, ttl);
      storage.save('lblogin', result, ttl);
      // fetch users.
      const { data } = yield call(fetchUser, result.userId);
      storage.save('lbuser', data, ttl);

      // push to home page.
      yield put({ type: 'save', payload: { user: data, authorized: true } });
      yield put(routerRedux.push('/'));
    },

    * logout({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save', payload: { user: null, authorized: false } });
      storage.remove('lbtoken');
      storage.remove('lblogin');
      storage.remove('lbuser');
    },
  },

  reducers: {
    save(state, { payload: { user, authorized } }) {
      return { ...state, user, authorized };
    },
  },

};
