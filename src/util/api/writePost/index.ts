import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const writeCarrotPost = async (
  accessToken: string,
  title: string,
  description: string,
  price: number,
  tags: Array<string>,
) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.post(`${uri.carrot}`, { title, description, price, tags });
  } catch (error) {
    throw error;
  }
};

export const writeGroupPost = async (
  accessToken: string,
  title: string,
  description: string,
  price: number,
  tags: Array<string>,
  date: string,
  headCount: number,
) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.post(`${uri.group}`, {
      title,
      description,
      price,
      tags,
      date,
      head_count: headCount,
    });
  } catch (error) {
    throw error;
  }
};
