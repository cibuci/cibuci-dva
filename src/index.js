import dva from 'dva';
import { browserHistory } from 'dva/router';
import createLoading from 'dva-loading';
import { message } from 'antd';
import moment from 'moment';
import './index.css';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

moment.locale('zh-cn');

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
});
app.use(createLoading());

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/app'));
app.model(require('./models/comment'));
app.model(require('./models/topic/'));
app.model(require('./models/article/'));
app.model(require('./models/pk'));
app.model(require('./models/pk-comment/'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
