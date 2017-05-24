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
          if (e.body.error && e.body.error.details && e.body.error.details.userId) {
            message.warning('用户账号未激活，请登录邮箱验证。');
            yield put(routerRedux.push(`/verify/${e.body.error.details.userId}`));
          } else {
            message.error('用户名或密码错误。');
          }
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

      let user;
      try {
        user = yield call(register, params);
      } catch (e) {
        message.error(e);
        return;
      }

      yield put(routerRedux.push(`/verify/${user.id}`));
      message.success('注册成功，请登录邮箱激活账号。');
    },

    * logout({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'clean' });
      yield call(logout);
      yield put({ type: 'cleanToken' });
    },

    * usermodify({ payload }, { call, put, select }) {  // eslint-disable-line
      const { params } = payload;

      try {
        yield call(updateUser, params);
      } catch (e) {
        message.error(e.message);
        return;
      }

      yield put({ type: 'saveUserField', payload: { ...params.data } });
      const user = yield select(state => state.app.user);
      storage.saveRecordValue('lbuser', user);
    },

    * passwordchange({ payload }, { call, put, select }) {  // eslint-disable-line
      const { params } = payload;

      try {
        yield call(changePassword, params);
      } catch (e) {
        if (e.status === 400) {
          message.error('当前密码不正确。');
        } else {
          message.error(e.message);
        }
        return;
      }

      yield put({ type: 'clean' });
      yield put({ type: 'cleanToken' });
      yield put(routerRedux.push('/signin'));
      message.success('密码修改成功，请重新登录。');
    },

    * fetchUserByName({ payload }, { call, put, select }) {  // eslint-disable-line
      const { data } = yield call(findOneUser, payload);
      yield put({ type: 'save', payload: { current: data } });
      const currentUser = yield select(state => state.app.user);

      // update user info.
      if (currentUser && data && data.id === currentUser.id) {
        yield put({ type: 'save', payload: { user: data } });
        storage.saveRecordValue('lbuser', data);
      }
    },

    * clean({ payload }, { call, put }) {  // eslint-disable-line
      storage.remove('lblogin');
      storage.remove('lbuser');
      yield put({ type: 'save', payload: { user: null, authorized: false } });
    },

    * cleanToken({ payload }, { call, put }) {  // eslint-disable-line
      storage.remove('lbtoken');
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },

    saveUserField(state, action) {
      const user = { ...state.user, ...action.payload };
      return { ...state, user };
    },
  },

};
