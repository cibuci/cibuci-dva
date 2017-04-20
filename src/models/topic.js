
export default {

  namespace: 'topic',

  state: {
    list: [
      {
        id: 0,
        author: {
          avatar: 'https://avatars1.githubusercontent.com/u/7099792?v=3&s=40',
          displayname: 'Wayne',
          username: 'wayne',
        },
        date: {
          published: '4-9 19:10',
          updated: '',
          created: '',
        },
        title: '超职场时代真的会来临吗？',
        statistics: {
          reads: 200,
          stars: 49,
          comments: 12,
        },
      },
      {
        id: 1,
        author: {
          avatar: 'https://avatars1.githubusercontent.com/u/7099792?v=3&s=40',
          displayname: 'Wayne',
          username: 'wayne',
        },
        date: {
          published: '4-9 19:10',
          updated: '',
          created: '',
        },
        title: '超职场时代真的会来临吗？',
        statistics: {
          reads: 200,
          star: 49,
          comments: 12,
        },
      },
      {
        id: 2,
        author: {
          avatar: 'https://avatars1.githubusercontent.com/u/7099792?v=3&s=40',
          displayname: 'Wayne',
          username: 'wayne',
        },
        date: {
          published: '4-9 19:10',
          updated: '',
          created: '',
        },
        title: '超职场时代真的会来临吗？',
        statistics: {
          reads: 200,
          star: 49,
          comments: 12,
        },
      },
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
