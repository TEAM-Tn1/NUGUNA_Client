import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getDetailChat = async (accessToken: string, roomId: string, page: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(`${uri.content}?page=${page}?roomId=${roomId}`);
  } catch (error) {
    throw error;
  }
};
