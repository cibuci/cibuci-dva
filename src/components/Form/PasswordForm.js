import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

const styles = {
  form: {
  },
  forgot: {
    float: 'right',
  },
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  },
};


class PasswordForm extends React.Component {

  passwordRepeatValidator(rule, value, callback) {
    const newPasswordValue = this.props.form.getFieldValue('newPassword');
    if (newPasswordValue === value) {
      callback();
    } else {
      callback(new Error('password not same.'));
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.newPassword === values.newPasswordRepeat) {
          this.props.dispatch({ type: 'app/passwordchange', payload: { params: values } });
        }
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} style={styles.form} className="login-form">
        <FormItem
          {...formItemLayout}
          label="旧密码"
        >
          {getFieldDecorator('oldPassword', {
            rules: [{ required: true, message: '请输入你的旧密码!' }],
          })(
            <Input type="password" style={{ padding: '1.4rem 1rem' }} />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="密码"
        >
          {getFieldDecorator('newPassword', {
            rules: [
              { required: true, message: '请输入新密码!' },
              { min: 6, message: '密码不少于6个字符' },
              { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/, message: '必须包含大小写字母' },
            ],
          })(
            <Input type="password" style={{ padding: '1.4rem 1rem' }} />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
        >
          {getFieldDecorator('newPasswordRepeat', {
            rules: [
              { required: true, message: '请重复输入新密码!' },
              { validator: this.passwordRepeatValidator.bind(this), message: '两次输入的密码不一致!' },
            ],
          })(
            <Input type="password" style={{ padding: '1.4rem 1rem' }} />,
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button loading={this.props.loading} type="primary" htmlType="submit">
            修改密码
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedPasswordForm = Form.create()(PasswordForm);

function mapStateToProps(state) {
  return {
    loading: state.loading.models.app,
  };
}

export default connect(mapStateToProps)(WrappedPasswordForm);
