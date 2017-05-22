import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button } from 'antd';
import { findOneUser } from '../../services/cibuci';

const FormItem = Form.Item;

const styles = {
  form: {
    width: 280,
  },
  forgot: {
    float: 'right',
  },
  button: {
    width: '100%',
  },
};

class SignupForm extends React.Component {
  usernameTimer: null
  emailTimer: null

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({ type: 'app/register', payload: { params: values } });
      }
    });
  }

  usernameValidator(rule, value, callback) {
    if (!value) return callback();

    if (this.usernameTimer) {
      clearTimeout(this.usernameTimer);
      this.usernameTimer = null;
    }

    this.usernameTimer = setTimeout(function checkUserByName() {
      findOneUser({ username: value })
        .then(() => {
          this.usernameTimer = null;
          callback(new Error('user exist.'));
        })
        .catch((e) => {
          this.usernameTimer = null;
          if (e && e.status === 404) {
            callback();
          } else {
            callback(new Error('unknow error.'));
          }
        });
    }, 300);
  }

  emailValidator(rule, value, callback) {
    if (!value) return callback();

    if (this.emailTimer) {
      clearTimeout(this.emailTimer);
      this.emailTimer = null;
    }

    this.emailTimer = setTimeout(function checkUserByEmail() {
      findOneUser({ email: value })
        .then(() => {
          this.emailTimer = null;
          callback(new Error('user exist.'));
        })
        .catch((e) => {
          this.emailTimer = null;
          if (e && e.status === 404) {
            callback();
          } else {
            callback(new Error('unknow error.'));
          }
        });
    }, 300);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form id="cbc-signup" onSubmit={this.handleSubmit} style={styles.form} className="login-form">
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              { required: true, message: '请输入你的用户名!' },
              { min: 3, message: '用户名不少于3个字符' },
              { max: 20, message: '用户名不超过20个字符' },
              { pattern: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/, message: '只能使用字母，数字和下划线' },
              { validator: this.usernameValidator.bind(this), message: '用户名已经存在' },
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              placeholder="用户名"
            />,
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: '请输入你的邮箱!' },
              { type: 'email', message: '请输入合法的邮箱地址' },
              { validator: this.emailValidator.bind(this), message: '邮箱已经存在' },
            ],
          })(
            <Input
              prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
              placeholder="邮箱"
            />,
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: '请输入密码!' },
              { min: 6, message: '密码不少于6个字符' },
              { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/, message: '必须包含大小写字母' },
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" style={styles.button}>
            注册
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedSignupForm = Form.create()(SignupForm);

export default connect()(WrappedSignupForm);
