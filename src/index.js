import dva from 'dva';
import { browserHistory } from 'dva/router';
import { message } from 'antd';
import './index.css';

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/comment'));
app.model(require('./models/topic/'));
app.model(require('./models/article'));
app.model(require('./models/pk'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
