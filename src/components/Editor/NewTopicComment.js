import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import ReactQuill from 'react-quill';
import Spacer from '../Common/Spacer';
import styles from './NewTopicComment.less';

class NewTopicComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
    this.quillRef = null;
    this.reactQuillRef = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.attachQuillRefs = this.attachQuillRefs.bind(this);
  }

  componentDidMount() {
    this.attachQuillRefs();
  }

  componentDidUpdate() {
    this.attachQuillRefs();
  }

  attachQuillRefs() {
    // Ensure React-Quill reference is available:
    if (typeof this.reactQuillRef.getEditor !== 'function') return;
    // Skip if Quill reference is defined:
    if (this.quillRef != null) return;

    const quillRef = this.reactQuillRef.getEditor();
    if (quillRef != null) this.quillRef = quillRef;
  }

  handleClick(e) {
    e.preventDefault();

    // TODO: add some validate.
    const data = {
      ...this.state,
      current: this.props.current,
    };
    this.props.dispatch({ type: 'topic/addComment', payload: data });

    // clean the textarea.
    this.quillRef.setText('');
  }

  handleChange(html) {
    this.setState({ content: html });
  }

  handleTabChange(value) {
    this.setState({ tab: value });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <Spacer>
        <div className={styles.wrapper}>
          <div style={{ padding: '1rem' }}>
            <ReactQuill
              ref={(el) => { this.reactQuillRef = el; }}
              theme={'snow'}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ padding: '0 1rem 1rem 1rem', textAlign: 'right' }}>
            <Button onClick={this.handleClick} type="primary" size="large">提交</Button>
          </div>
        </div>
      </Spacer>
    );
  }
}

NewTopicComment.propTypes = {
};

function mapStateToProps(state) {
  return {
    current: state.topic.current,
  };
}

export default connect(mapStateToProps)(NewTopicComment);
