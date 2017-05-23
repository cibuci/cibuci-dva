import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, message } from 'antd';
import { reset } from '../../utils/loopback/auth';

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

class ResetPasswordForm extends React.Component {

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
        reset(values)
          .then(() => {
            this.setState({ loading: false, success: true });
            message.success('请查看邮箱，完成密码重置。');
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
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: '请输入注册时的邮箱!' },
              { type: 'email', message: '请输入合法的邮箱地址' },
            ],
          })(
            <Input
              prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
              placeholder="邮箱"
            />,
          )}
        </FormItem>
        <FormItem>
          { this.state.success ? (
            <p>请查看邮箱，完成密码重置。</p>
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

const WrappedResetPasswordForm = Form.create()(ResetPasswordForm);

export default connect()(WrappedResetPasswordForm);
