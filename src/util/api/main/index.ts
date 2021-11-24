import request from '../../axios';

export default {
  setCarrotGet(accessToken: string | null) {
    return request({
      url: `/feed?page=0&range=2&is_used_item=true&sort=time`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
  setGroupGet(accessToken: string | null) {
    return request({
      url: `/feed?page=0&range=2&is_used_item=false&sort=time`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
};
