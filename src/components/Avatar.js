import React from 'react';

const styles = {
  avatar: {
    border: '1px solid #f5f5f5',
    borderRadius: 5,
    width: '2rem',
    height: '2rem',
    verticalAlign: 'middle',
  },
};

const Avatar = (props) => {
  const src = props.avatar || 'https://avatars1.githubusercontent.com/u/7099792?v=3&s=40';
  return (
    <img style={styles.avatar} src={src} alt="avatar" />
  );
};

Avatar.propTypes = {
};

export default Avatar;
