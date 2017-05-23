import React from 'react';
import Block from 'react-blocks';
import { connect } from 'dva';
import { Button, message } from 'antd';
import { Link } from 'dva/router';
import Helmet from 'react-helmet';
import SimpleLayout from '../components/Layout/Simple';
import { verify } from '../utils/loopback/auth';

import styles from './SignPage.less';

class SigninPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = { remaining: 0, loading: false };
    this.handleClick = this.handleClick.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
  }

  startCountdown() {
    const _this = this;
    setTimeout(() => {
      if (_this.state.remaining) {
        _this.setState({ remaining: _this.state.remaining - 1 });
        _this.startCountdown();
      }
    }, 1000);
  }

  handleClick() {
    const userid = this.props.params.userid;
    if (userid) {
      this.setState({ loading: true });

      verify({ userId: userid })
        .then(() => {
          this.setState({ remaining: 60, loading: false });
          this.startCountdown();
          message.success('邮件发送成功。');
        })
        .catch(() => {
          this.setState({ remaining: 60, loading: false });
          this.startCountdown();
          message.error('邮件发送失败。');
        });
    }
  }

  render() {
    const { userid } = this.props.params;

    return (
      <SimpleLayout>
        <Helmet>
          <title>验证邮箱 - 辞不辞</title>
        </Helmet>
        <Block className={styles.container} layout horizontal centered>
          <div>
            <div className={styles.logowrapper}>
              <Link to="/">
                <img role="presentation" alt="logo" className={styles.logo} src="http://cdn-qn0.cibuci.com/static/community/logo-horizontal.png" />
              </Link>
            </div>
            <div className={styles.card}>
              { userid ? (
                <div>
                  <h2 style={{ fontWeight: 'normal' }}>请立即登录邮箱，激活账号！</h2>
                  <br />
                  <p>没有收到邮件？<small>请检查“垃圾邮件”。</small></p>
                  <div style={{ marginTop: 8 }}>
                    { this.state.remaining ? (
                      <p>已发送，{this.state.remaining}s 后重新发送。</p>
                    ) : (
                      <Button loading={this.state.loading} onClick={this.handleClick}>或重新发送邮件</Button>
                    ) }
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ fontWeight: 'normal', marginBottom: '1rem' }}>您已经成功验证邮箱！</h2>
                  <Link to="signin"><Button size="large" type="primary">立即登录</Button></Link>
                </div>
              ) }
            </div>
          </div>
        </Block>
      </SimpleLayout>
    );
  }
}

SigninPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

export default connect(mapStateToProps)(SigninPage);
