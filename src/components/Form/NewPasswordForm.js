import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, message } from 'antd';
import { resetPassword } from '../../utils/loopback/auth';

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

class NewPasswordForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = { loading: false, success: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ loading: true });
        const token = this.props.token;
        resetPassword(values, token)
          .then(() => {
            this.setState({ loading: false, success: true });
            message.success('密码重置成功，请重新登录。');
          })
          .catch((error) => {
            this.setState({ loading: false });
            message.error(error.message);
          });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form id="cbc-reset-password" onSubmit={this.handleSubmit} style={styles.form} className="login-form">
        <FormItem hasFeedback>
          {getFieldDecorator('newPassword', {
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
          { this.state.success ? (
            <p>密码重置成功，请重新<Link to="/signin">登录</Link>。</p>
          ) : (
            <Button loading={this.state.loading} type="primary" htmlType="submit" style={styles.button}>
              重置密码
            </Button>
          ) }
        </FormItem>
      </Form>
    );
  }
}

const WrappedNewPasswordForm = Form.create()(NewPasswordForm);

export default connect()(WrappedNewPasswordForm);
