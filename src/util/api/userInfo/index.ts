/* eslint-disable import/no-anonymous-default-export */
import requset from '../../axios';

export default {
  getUserInfo(email: string) {
    return requset({
      url: `/users/${email}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  },
};
