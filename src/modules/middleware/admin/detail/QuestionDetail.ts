import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getAdminQuestionDetail } from '../../../../util/api/admin/listDetail';
import { QUESTION_LIST_DETAIL } from '../../../action/admin/interface';
import { reducerType } from '../../../reducer';
import { AdminQuestionDetailState } from '../../../reducer/admin/interface/detail/QuestionDetail';

const getQuestionDetailFunc = (state: reducerType): AdminQuestionDetailState =>
  state.adminQuestionDetail;

const questionDetailGetSaga = function* (): any {
  const actionType = 'ADMIN/QUESTION_LIST_DETAIL';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getQuestionDetailFunc);
  const accessToekn = localStorage.getItem('access_token') || '';
  try {
      const response = yield call(getAdminQuestionDetail, accessToekn, state.id);
      yield put({
        type: SUCCESS,
        payload: response ? response.data : null,
      });
    } catch (error: any) {
      if (error.response?.data) {
        yield put({
          type: FAILURE,
          payload: { ...error.response.data, type: QUESTION_LIST_DETAIL },
        });
      } else {
        yield put({
          type: FAILURE,
          payload: {
            message: 'Network Error',
            status: 500,
          },
        });
      }
  }
};

function* adminQuestionSaga() {
    yield takeLatest(QUESTION_LIST_DETAIL, questionDetailGetSaga);
  }
  
  export default adminQuestionSaga;