import uri from '../../../constance/uri';
import { getRequest } from '../default';

export const getAdminQuestionList = async (page: number) => {
  try {
    const request = getRequest();
    return await request.get(`${uri.questionList}?page=${page}`);
  } catch (error) {
    throw error;
  }
};

export const getAdminReportUserList = async (page: number) => {
  try {
    const request = getRequest();
    return await request.get(`${uri.reportUserList}?page=${page}`);
  } catch (error) {
    throw error;
  }
};

export const getAdminReportPostList = async (page: number) => {
  try {
    const request = getRequest();
    return await request.get(`${uri.reportPostList}?page=${page}`);
  } catch (error) {
    throw error;
  }
};
