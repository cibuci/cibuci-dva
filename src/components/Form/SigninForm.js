import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

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

class SigninForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({ type: 'app/login', payload: { params: values } });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form id="cbc-signin" onSubmit={this.handleSubmit} style={styles.form} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              placeholder="用户名"
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
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住我</Checkbox>,
          )}
          <Link style={styles.forgot} to="/reset-password">忘记密码</Link>
          <Button
            type="primary"
            htmlType="submit"
            style={styles.button}
            loading={this.props.loading}
          >
            登录
          </Button>
        </FormItem>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading.models.app,
  };
}

const WrappedSigninForm = Form.create()(SigninForm);

export default connect(mapStateToProps)(WrappedSigninForm);
