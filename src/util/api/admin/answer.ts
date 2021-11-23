import request from '../../axios';

export default {
  setQuestionAnswer(id: string | number, accessToken: string | null, reason: string) {
    return request({
      url: `/admin/question`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: { question_id: id, reason: reason },
    });
  },
};
