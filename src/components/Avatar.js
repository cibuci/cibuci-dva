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
  middle: {
    width: '2.4rem',
    height: '2.4rem',
  },
  large: {
    width: '2.9rem',
    height: '2.9rem',
  },
  full: {
    width: '100%',
    height: 'auto',
  },
};

const Avatar = (props) => {
  const { user, size } = props;

  let src;
  if (user && user.avatarUrl) {
    if (size === 'full') {
      src = `${user.avatarUrl}?imageView2/1/w/400/h/400/q/75|imageslim`;
    } else {
      src = `${user.avatarUrl}?imageView2/1/w/200/h/200/q/75|imageslim`;
    }
  } else {
    src = 'https://secure.gravatar.com/avatar/';
    if (user) {
      if (size === 'full') {
        src = `${src}${hash(user.email)}?s=400`;
      } else {
        src = `${src}${hash(user.email)}?s=200`;
      }
    }
  }

  let style = styles.avatar;
  if (size === 'large') style = { ...style, ...styles.large };
  if (size === 'middle') style = { ...style, ...styles.middle };
  if (size === 'full') style = { ...style, ...styles.full };

  return (
    <img style={style} src={src} alt="avatar" />
  );
};

Avatar.propTypes = {
};

export default Avatar;
