/* eslint-disable import/no-anonymous-default-export */
import request from '../../axios';

export default {
  getMyInfo() {
    return request({
      url: `/users/information`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  },
  setHideAccount() {
    return request({
      url: `/users/hide`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  },
  unsetHideAccount() {
    return request({
      url: `/users/hide`,
      method: 'delete',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  },
  deleteToken() {
    return request({
      url: `users/logout`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
  },
};
