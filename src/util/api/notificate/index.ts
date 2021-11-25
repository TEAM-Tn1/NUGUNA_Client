import request from '../../axios';

export default {
  setListGet(accessToken: string | null, page: number) {
    return request({
      url: `/notification/list?page=${page}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
};
