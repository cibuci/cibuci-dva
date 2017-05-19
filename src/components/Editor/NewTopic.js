import React from 'react';
import { connect } from 'dva';
import { Input, Select, Button } from 'antd';
import ReactQuill from 'react-quill';
import styles from './NewTopic.less';

const Option = Select.Option;

class NewTopic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      tab: 'share',
      title: '',
    };
    this.quillRef = null;
    this.reactQuillRef = null;
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
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

  handleClick() {
    // TODO: add some validate.

    this.props.dispatch({ type: 'topic/addItem', payload: this.state });
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
    const selectBefore = (
      <Select
        defaultValue="share"
        value={this.state.tab}
        style={{ width: 80 }}
        onChange={this.handleTabChange}
      >
        <Option value="share">分享</Option>
        <Option value="ask">问答</Option>
      </Select>
    );

    return (
      <div className={styles.wrapper}>
        <div style={{ padding: '1rem' }}>
          <Input
            size="large"
            style={{ padding: '1.2rem' }}
            addonBefore={selectBefore}
            placeholder="请输入标题"
            onChange={this.handleTitleChange}
            value={this.state.title}
          />
        </div>
        <div style={{ padding: '0 1rem 1rem 1rem' }}>
          <ReactQuill
            ref={(el) => { this.reactQuillRef = el; }}
            theme={'snow'}
            onChange={this.handleChange}
            modules={NewTopic.modules}
            formats={NewTopic.formats}
          />
        </div>
        <div style={{ padding: '0 1rem 1rem 1rem', textAlign: 'right' }}>
          <Button onClick={this.handleClick} type="primary" size="large">发布</Button>
        </div>
      </div>
    );
  }
}

/*
 * Quill modules to attach to editor
 * See http://quilljs.com/docs/modules/ for complete options
 */
NewTopic.modules = {};
NewTopic.modules.toolbar = [
  ['bold', 'italic'],
  [{ list: 'ordered' }, { list: 'bullet' }, 'blockquote'],
  [{ header: [1, 2, false] }],
  ['link', 'image'],
];

/*
 * Quill editor formats
 * See http://quilljs.com/docs/formats/
 */
NewTopic.formats = [
  'bold', 'italic', 'blockquote', 'header',
  'list', 'direction', 'link', 'image',
];

NewTopic.propTypes = {
};

export default connect()(NewTopic);
