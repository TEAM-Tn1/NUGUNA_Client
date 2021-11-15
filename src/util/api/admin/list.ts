import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getAdminQuestionList = async (accessToken: string, page: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.get(`${uri.questionList}?page=${page}&size=5&sort=desc`);
    console.log(response);

    return response;
  } catch (error) {
    throw error;
  }
};

export const getAdminReportUserList = async (accessToken: string, page: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.get(`${uri.reportUserList}?page=${page}&size=5&sort=desc`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAdminReportPostList = async (accessToken: string, page: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.get(`${uri.reportPostList}?page=${page}&size=5&sort=desc`);
    return response;
  } catch (error) {
    throw error;
  }
};
