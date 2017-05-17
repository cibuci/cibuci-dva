import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, message } from 'antd';

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
            rules: [{ required: false, message: '请输入你的旧密码!' }],
          })(
            <Input type="password" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="密码"
        >
          {getFieldDecorator('newPassword', {
            rules: [{ required: false, message: '请输入新密码!' }],
          })(
            <Input type="password" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
        >
          {getFieldDecorator('newPasswordRepeat', {
            rules: [{ required: false, message: '请重复输入新密码!' }],
          })(
            <Input type="password" />,
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
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
    user: state.app.user,
  };
}

export default connect(mapStateToProps)(WrappedPasswordForm);
