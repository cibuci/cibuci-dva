import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import ReactQuill from 'react-quill';
import styles from './NewPkComment.less';

class NewPkComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      point: 'positive',
    };
    this.quillRef = null;
    this.reactQuillRef = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickPositive = this.handleClickPositive.bind(this);
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
      content: this.state.content,
      point: 'negative',
      current: this.props.current,
    };
    this.props.dispatch({ type: 'pkcomment/add', payload: data });

    // clean the textarea.
    this.quillRef.setText('');
  }

  handleClickPositive(e) {
    e.preventDefault();

    // TODO: add some validate.
    const data = {
      content: this.state.content,
      point: 'positive',
      current: this.props.current,
    };
    this.props.dispatch({ type: 'pkcomment/add', payload: data });

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
        <div style={{ padding: '1rem' }}>
          <ReactQuill
            ref={(el) => { this.reactQuillRef = el; }}
            theme={'bubble'}
            onChange={this.handleChange}
            placeholder="此处回复，参与PK！"
          />
        </div>
        <div style={{ padding: '0 1rem 1rem 1rem', textAlign: 'right' }}>
          <Button onClick={this.handleClickPositive} type="primary" size="large">支持正方</Button>&nbsp;&nbsp;
          <Button onClick={this.handleClick} type="primary" size="large">支持反方</Button>
        </div>
      </div>
    );
  }
}

NewPkComment.propTypes = {
};

function mapStateToProps(state) {
  return {
    current: state.pk.current,
  };
}

export default connect(mapStateToProps)(NewPkComment);
