import uri from '../../../constance/uri';
import { getRequest } from '../default';

export const getCarrotPostList = async (page: number, sort: string) => {
  try {
    const request = getRequest();
    return await request.get(`${uri.carrot}?page=${page}&range=4&sort=${sort}`);
  } catch (error) {
    throw error;
  }
};

export const getGroupPostList = async (page: number, sort: string) => {
  try {
    const request = getRequest();
    return await request.get(`${uri.group}?page=${page}&range=4&sort=${sort}`);
  } catch (error) {
    throw error;
  }
};
