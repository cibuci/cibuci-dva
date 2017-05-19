import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import ReactQuill from 'react-quill';
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
      <div className={styles.wrapper}>
        <div>
          <ReactQuill
            ref={(el) => { this.reactQuillRef = el; }}
            theme={'snow'}
            onChange={this.handleChange}
            modules={NewTopicComment.modules}
            formats={NewTopicComment.formats}
          />
        </div>
        <div style={{ padding: '1.5rem', textAlign: 'right' }}>
          <Button onClick={this.handleClick} type="primary" size="large">回复</Button>
        </div>
      </div>
    );
  }
}

/*
 * Quill modules to attach to editor
 * See http://quilljs.com/docs/modules/ for complete options
 */
NewTopicComment.modules = {};
NewTopicComment.modules.toolbar = [
  ['bold', 'italic'],
  [{ list: 'ordered' }, { list: 'bullet' }, 'blockquote'],
  [{ header: [1, 2, false] }],
  ['link', 'image'],
];

/*
 * Quill editor formats
 * See http://quilljs.com/docs/formats/
 */
NewTopicComment.formats = [
  'bold', 'italic', 'blockquote', 'header',
  'list', 'direction', 'link', 'image',
];

NewTopicComment.propTypes = {
};

function mapStateToProps(state) {
  return {
    current: state.topic.current,
  };
}

export default connect(mapStateToProps)(NewTopicComment);
