import dva from 'dva';
import { browserHistory } from 'dva/router';
import createLoading from 'dva-loading';
import { message } from 'antd';
import moment from 'moment';
import 'react-quill/dist/quill.snow.css';
import './index.css';

moment.locale('zh-cn');

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
  // history: browserHistory,
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
});
app.use(createLoading());

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/app'));
app.model(require('./models/topic/'));
app.model(require('./models/article/'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
