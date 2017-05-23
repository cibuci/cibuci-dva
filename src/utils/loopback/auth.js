import fetcher from './fetcher';

function parseJSON(response) {
  return response.json;
}

export default {

  login(params) {
    return fetcher('/users/login', { body: params }, 'POST', true)
      .then(parseJSON);
  },

  register(params) {
    return fetcher('/users', { body: params }, 'POST', true)
      .then(parseJSON);
  },

  changePassword(params) {
    const { oldPassword, newPassword } = params;
    return fetcher('/users/change-password', { body: { oldPassword, newPassword } }, 'POST')
      .then(parseJSON);
  },

  logout() {
    return fetcher('/users/logout', {}, 'POST')
      .then(parseJSON);
  },

  verify(params) {
    return fetcher(`/users/${params.userId}/verify`, {}, 'POST')
      .then(parseJSON);
  },

  reset(params) {
    return fetcher('/users/reset', { body: params }, 'POST')
      .then(parseJSON);
  },

  resetPassword(params, token) {
    return fetcher('/users/reset-password', { body: params, selfToken: token }, 'POST', true);
  },

};
