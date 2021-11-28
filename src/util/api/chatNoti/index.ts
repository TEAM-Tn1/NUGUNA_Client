import request from '../../axios';

export default {
  setRingGet(accessToken: string | null) {
    return request({
      url: `/users/notification`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
};
