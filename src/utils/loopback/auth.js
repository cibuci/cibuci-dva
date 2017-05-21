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

};
