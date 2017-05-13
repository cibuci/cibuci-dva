import React from 'react';
import { hash } from '../utils/tools';

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
  const { user } = props;

  let src = 'https://secure.gravatar.com/avatar/';
  if (user) src += hash(user.email);
  if (user && user.avatarUrl) {
    src = user.avatarUrl;
  }

  const style = (props.size === 'large' ? styles.large : styles.avatar);
  return (
    <img style={style} src={src} alt="avatar" />
  );
};

Avatar.propTypes = {
};

export default Avatar;
