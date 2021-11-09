import uri from '../../../constance/uri';
import { getRequest, getRequestWithAccessToken } from '../default';

export const getAdminQuestionList = async (accessToken: string, page: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(`${uri.questionList}?page=${page}`);
  } catch (error) {
    throw error;
  }
};

export const getAdminReportUserList = async (accessToken: string, page: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(`${uri.reportUserList}?page=${page}`);
  } catch (error) {
    throw error;
  }
};

export const getAdminReportPostList = async (accessToken: string, page: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(`${uri.reportPostList}?page=${page}`);
  } catch (error) {
    throw error;
  }
};
