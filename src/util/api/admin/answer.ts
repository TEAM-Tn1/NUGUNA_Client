import request from '../../axios';

export default {
  setQuestionAnswer(accessToken: string | null, id: string | number, reason: string) {
    return request({
      url: `/admin/question`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: { question_id: id, reason: reason },
    });
  },
  setReportPostAnswer(
    accessToken: string | null,
    id: string | number,
    reason: string,
    removeCheck: boolean,
  ) {
    return request({
      url: `/admin/report/feed`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: { report_id: id, reason: reason, remove: removeCheck },
    });
  },
};
