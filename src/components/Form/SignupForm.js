import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

const styles = {
  form: {
    width: 300,
  },
  forgot: {
    float: 'right',
  },
  button: {
    width: '100%',
  },
};

class SignupForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({ type: 'app/register', payload: { params: values } });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} style={styles.form} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入你的用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              placeholder="用户名"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: '请输入你的邮箱!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
              placeholder="邮箱"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
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
          已经有账号？ <Link to="/signin">立即登录!</Link>
        </FormItem>
      </Form>
    );
  }
}

const WrappedSignupForm = Form.create()(SignupForm);

export default connect()(WrappedSignupForm);
