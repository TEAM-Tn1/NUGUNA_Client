import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getDetailPost = async (accessToken: string, feedId: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(`${uri.feed}/${feedId}`);
  } catch (error) {
    throw error;
  }
};
