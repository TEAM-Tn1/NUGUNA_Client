import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getDetailPost = async (accessToken: string, roomId: string, page: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(`${uri.content}?page=${page}`);
  } catch (error) {
    throw error;
  }
};
