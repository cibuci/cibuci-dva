
export default {

  namespace: 'article',

  state: {
    list: [
      {
        id: 0,
        title: '听说你很想成为自由职业者',
        cover: 'http://placehold.it/700x180',
        date: {
          published: '1小时前',
        },
        statistics: {
          stars: 100,
          reads: 223,
          like: 23,
        },
        summary: '',
        content: '',
      },
      {
        id: 1,
        title: 'PMCAFF热榜 第37期：支付产品如何设计账户体系',
        cover: 'http://placehold.it/700x180',
        date: {
          published: '1小时前',
        },
        statistics: {
          stars: 100,
          reads: 223,
          like: 23,
        },
        summary: '',
        content: '',
      },
      {
        id: 1,
        title: 'PMCAFF热榜 第37期：支付产品如何设计账户体系',
        cover: 'http://placehold.it/700x180',
        date: {
          published: '1小时前',
        },
        statistics: {
          stars: 100,
          reads: 223,
          like: 23,
        },
        summary: '',
        content: '',
      },
      {
        id: 2,
        title: 'PMCAFF热榜 第37期：支付产品如何设计账户体系',
        cover: 'http://placehold.it/700x180',
        date: {
          published: '1小时前',
        },
        statistics: {
          stars: 100,
          reads: 223,
          like: 23,
        },
        summary: '',
        content: '',
      },
      {
        id: 3,
        title: 'PMCAFF热榜 第37期：支付产品如何设计账户体系',
        cover: 'http://placehold.it/700x180',
        date: {
          published: '1小时前',
        },
        statistics: {
          stars: 100,
          reads: 223,
          like: 23,
        },
        summary: '',
        content: '',
      },
      {
        id: 4,
        title: 'PMCAFF热榜 第37期：支付产品如何设计账户体系',
        cover: 'http://placehold.it/700x180',
        date: {
          published: '1小时前',
        },
        statistics: {
          stars: 100,
          reads: 223,
          like: 23,
        },
        summary: '',
        content: '',
      },
      {
        id: 5,
        title: 'PMCAFF热榜 第37期：支付产品如何设计账户体系',
        cover: 'http://placehold.it/700x180',
        date: {
          published: '1小时前',
        },
        statistics: {
          stars: 100,
          reads: 223,
          like: 23,
        },
        summary: '',
        content: '',
      },
      {
        id: 6,
        title: 'PMCAFF热榜 第37期：支付产品如何设计账户体系',
        cover: 'http://placehold.it/700x180',
        date: {
          published: '1小时前',
        },
        statistics: {
          stars: 100,
          reads: 223,
          like: 23,
        },
        summary: '',
        content: '',
      },
      {
        id: 7,
        title: 'PMCAFF热榜 第37期：支付产品如何设计账户体系',
        cover: 'http://placehold.it/700x180',
        date: {
          published: '1小时前',
        },
        statistics: {
          stars: 100,
          reads: 223,
          like: 23,
        },
        summary: '',
        content: '',
      },
      {
        id: 8,
        title: 'PMCAFF热榜 第37期：支付产品如何设计账户体系',
        cover: 'http://placehold.it/700x180',
        date: {
          published: '1小时前',
        },
        statistics: {
          stars: 100,
          reads: 223,
          like: 23,
        },
        summary: '',
        content: '',
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
