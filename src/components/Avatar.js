import React from 'react';

const styles = {
  avatar: {
    border: '1px solid #f5f5f5',
    borderRadius: 4,
    width: '1.9rem',
    height: '1.9rem',
    verticalAlign: 'middle',
    backgroundColor: '#eee',
  },
  large: {
    border: '1px solid #f5f5f5',
    borderRadius: 4,
    width: '2.9rem',
    height: '2.9rem',
    verticalAlign: 'middle',
    backgroundColor: '#eee',
  },
};

const Avatar = (props) => {
  const src = props.avatar || 'https://avatars1.githubusercontent.com/u/7099792?v=3&s=40';
  const style = (props.size === 'large' ? styles.large : styles.avatar);
  return (
    <img style={style} src={src} alt="avatar" />
  );
};

Avatar.propTypes = {
};

export default Avatar;
