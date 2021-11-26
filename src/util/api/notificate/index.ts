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
  setTagGet(accessToken: string | null) {
    return request({
      url: `/notification/tags`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    });
  },
};
