import api from './api';

const setAuthToken = token => {
  if (token) {
    console.log('# token: ', token);
    api.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete api.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
