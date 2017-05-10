import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import storage from '../utils/storage';
import { login, register } from '../utils/auth';
import { fetchUser } from '../services/cibuci';

const BoardTypes = {
  PK_HOME: 'PK_HOME',
  TOPIC_HOME: 'TOPIC_HOME',
  ARTICLE_HOME: 'ARTICLE_HOME',
  TOPIC_ONE: 'TOPIC_ONE',
  ARTICLE_ONE: 'ARTICLE_ONE',
};

export default {

  namespace: 'app',

  state: {
    user: null,
    authorized: false,
    board: BoardTypes.PK_HOME,
    sayings: [
      `What would you do if you weren't afraid?`,
      `苟活一生 or 偏执一世 ?`,
      `放下你的不开心.....`,
      `享受，工作`,
    ],
    saying: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      // load user info from localstorage.
      const token = storage.load('lbtoken');
      if (token) {
        const user = storage.load('lbuser');
        dispatch({ type: 'fetch', payload: { user } });
      }

      // random saying.
      dispatch({ type: 'randomSaying' });
      setInterval(() => {
        dispatch({ type: 'randomSaying' });
      }, 8000);
    },

    board({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/:resource?/:item?').exec(pathname);
        if (match) {
          const resource = match[1];
          const item = match[2];

          if (!resource) {
            dispatch({ type: 'board', payload: { board: BoardTypes.PK_HOME } });
          }

          if (resource === 'topic') {
            if (item) {
              dispatch({ type: 'board', payload: { board: BoardTypes.TOPIC_ONE } });
            } else {
              dispatch({ type: 'board', payload: { board: BoardTypes.TOPIC_HOME } });
            }
          }

          if (resource === 'article') {
            if (item) {
              dispatch({ type: 'board', payload: { board: BoardTypes.ARTICLE_ONE } });
            } else {
              dispatch({ type: 'board', payload: { board: BoardTypes.ARTICLE_HOME } });
            }
          }
        }
      });
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

    * register({ payload }, { call, put }) { // eslint-disable-line
      const { params } = payload;
      yield call(register, params);
      yield put(routerRedux.push('/signin'));
    },

    * logout({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save', payload: { user: null, authorized: false } });
      storage.remove('lbtoken');
      storage.remove('lblogin');
      storage.remove('lbuser');
    },

    * board({ payload }, { call, put }) {  // eslint-disable-line
      const { board } = payload;
      yield put({ type: 'saveBoard', payload: { board } });
    },
  },

  reducers: {
    save(state, { payload: { user, authorized } }) {
      return { ...state, user, authorized };
    },
    saveBoard(state, { payload: { board } }) {
      return { ...state, board };
    },
    randomSaying(state) {
      const index = parseInt(Math.random() * state.sayings.length, 10);
      const saying = state.sayings[index];
      return { ...state, saying };
    },
  },

};
