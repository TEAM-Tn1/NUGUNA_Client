import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../reducer';
import { QUESTION_LIST, REPORT_USER_LIST, REPORT_POST_LIST } from '../../action/admin/interface';
import {
  getAdminQuestionList,
  getAdminReportUserList,
  getAdminReportPostList,
} from '../../../util/api/admin';
import AdminListState from '../../reducer/admin/interface';

const getStateFunc = (state: reducerType): AdminListState => state.adminList;

const questionListGetSata = function* (): any {
  const actionType = 'ADMIN/QUESTION_LIST';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(getAdminQuestionList, state.page);
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

const reportUserListGetSata = function* (): any {
  const actionType = 'ADMIN/REPORT_USER_LIST';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(getAdminQuestionList, state.page);
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

const reportPostListGetSata = function* (): any {
  const actionType = 'ADMIN/REPORT_POST_LIST';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(getAdminQuestionList, state.page);
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
  yield takeLatest(QUESTION_LIST, questionListGetSata);
  yield takeLatest(REPORT_USER_LIST, reportUserListGetSata);
  yield takeLatest(REPORT_POST_LIST, reportPostListGetSata);
}

export default adminListSaga;
