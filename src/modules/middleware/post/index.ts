import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getCarrotPostList, getGroupPostList } from '../../../util/api/post';
import { CARROT_POSTLIST, GROUP_POSTLIST } from '../../action/post/interface';
import { reducerType } from '../../reducer';
import PostState from '../../reducer/post/interface';

const getStateFunc = (state: reducerType): PostState => state.post;

const carrotPostGetSaga = function* (): any {
  const actionType = 'POST/CARROT_POSTLIST';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(getCarrotPostList, state.page);
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

const groupPostGetSaga = function* (): any {
  const actionType = 'POST/GROUP_POSTLIST';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(getGroupPostList, state.page);
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

function* postSaga() {
  yield takeLatest(CARROT_POSTLIST, carrotPostGetSaga);
  yield takeLatest(GROUP_POSTLIST, groupPostGetSaga);
}

export default postSaga;
