import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getCarrotPostList = async (accessToken: string, page: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(`${uri.carrot}?page=${page}&range=4`);
  } catch (error) {
    throw error;
  }
};

export const getGroupPostList = async (accessToken: string, page: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(`${uri.group}?page=${page}&range=4`);
  } catch (error) {
    throw error;
  }
};
