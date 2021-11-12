/* export { default as adminQuestionListSaga } from './Question';
export { default as adminReportUserListSaga } from './ReportUser';
export { default as adminReportPostListSaga } from './ReportPost';
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../../reducer';
import { QUESTION_LIST, REPORT_POST_LIST, REPORT_USER_LIST } from '../../../action/admin/interface';
import {
  getAdminQuestionList,
  getAdminReportUserList,
  getAdminReportPostList,
} from '../../../../util/api/admin';
import {
  AdminQuestionListState,
  AdminReportPostListState,
  AdminReportUserListState,
} from '../../../reducer/admin/interface';

const getQuestionStateFunc = (state: reducerType): AdminQuestionListState => state.adminQuestionList;
const getReportPostStateFunc = (state: reducerType): AdminReportPostListState => state.adminReportPostList;
const getReportUserStateFunc = (state: reducerType): AdminReportUserListState => state.adminReportUserList;

const questionListGetSaga = function* (): any {
  const actionType = 'ADMIN/QUESTION_LIST';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getQuestionStateFunc);
  const accessToekn = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getAdminQuestionList, accessToekn, state.page);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: QUESTION_LIST },
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

const reportPostListGetSaga = function* (): any {
  const actionType = 'ADMIN/REPORT_POST_LIST';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getReportPostStateFunc);
  const accessToekn = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getAdminReportPostList, accessToekn, state.page);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: actionType },
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

const reportUserListGetSaga = function* (): any {
  const actionType = 'ADMIN/REPORT_USER_LIST';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getReportUserStateFunc);
  const accessToekn = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getAdminReportUserList, accessToekn, state.page);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: actionType },
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

function* adminListSaga() {
  yield takeLatest(QUESTION_LIST, questionListGetSaga);
  yield takeLatest(REPORT_POST_LIST, reportPostListGetSaga);
  yield takeLatest(REPORT_USER_LIST, reportUserListGetSaga);
}

export default adminListSaga;
