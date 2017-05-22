import { message } from 'antd';
import { routerRedux } from 'dva/router';
import storage from '../utils/loopback/storage';
import {
  login,
  logout,
  register,
  changePassword,
} from '../utils/loopback/auth';
import {
  fetchUser,
  updateUser,
  findOneUser,
} from '../services/cibuci';

export default {

  namespace: 'app',

  state: {
    user: null,
    authorized: false,
    current: null,
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

      let result;
      let data;
      try {
        result = yield call(login, params);
        if (result.userId) {
          const user = yield call(fetchUser, result.userId);
          data = user.data;
        }
      } catch (e) {
        if (e.status === 401) {
          message.error('用户名或密码错误。');
        } else {
          message.error(e.message);
        }
        return;
      }

      const { id, ttl } = result;
      storage.save('lbtoken', id, ttl);
      storage.save('lblogin', result, ttl);
      storage.save('lbuser', data, ttl);

      // push to home page.
      yield put({ type: 'save', payload: { user: data, authorized: true } });
      yield put(routerRedux.push('/'));

      message.success(`${data.nickName || data.username}，欢迎回来。`);
    },

    * register({ payload }, { call, put }) { // eslint-disable-line
      const { params } = payload;
      yield call(register, params);
      yield put(routerRedux.push('/signin'));
    },

    * logout({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save', payload: { user: null, authorized: false } });
      yield call(logout);
      storage.remove('lbtoken');
      storage.remove('lblogin');
      storage.remove('lbuser');
    },

    * usermodify({ payload }, { call, put, select }) {  // eslint-disable-line
      const { params } = payload;
      yield call(updateUser, params);
      yield put({ type: 'save', payload: { user: params.data } });
      const user = yield select(state => state.app.user);
      storage.saveRecordValue('lbuser', user);
    },

    * passwordchange({ payload }, { call, put, select }) {  // eslint-disable-line
      const { params } = payload;
      yield call(changePassword, params);
      yield put({ type: 'logout' });
      yield put(routerRedux.push('/signin'));
    },

    * fetchUserByName({ payload }, { call, put }) {  // eslint-disable-line
      const { data } = yield call(findOneUser, payload);
      yield put({ type: 'save', payload: { current: data } });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
