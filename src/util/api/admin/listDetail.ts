import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getAdminQuestionListDetail = async (accessToken: string, question_id: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.get(`${uri.questionList}/${question_id}`);
    console.log(response);

    return response;
  } catch (error) {
    throw error;
  }
};
