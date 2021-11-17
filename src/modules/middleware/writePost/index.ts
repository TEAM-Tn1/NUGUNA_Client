import { call, put, select, takeLatest } from 'redux-saga/effects';
import { writeCarrotPost, writeGroupPost, postImg } from '../../../util/api/writePost';
import { CARROT, GROUP, PICTURE } from '../../action/writePost/interface';
import { reducerType } from '../../reducer';
import WritePostState from '../../reducer/writerPost/interface';

const getStateFunc = (state: reducerType): WritePostState => state.writePost;

const writeCarrotPostSaga = function* (): any {
  const actionType = 'WRITE/CARROT';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(
      writeCarrotPost,
      accessToken,
      state.title,
      state.description,
      state.price,
      state.tags,
    );
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

const writeGroupPostSaga = function* (): any {
  const actionType = 'WRITE/GROUP';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(
      writeGroupPost,
      accessToken,
      state.title,
      state.description,
      state.price,
      state.tags,
      state.date,
      state.headCount,
    );
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

const postImgSaga = function* (): any {
  const actionType = 'WRITE/PICTURE';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE;`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(postImg, accessToken, state.feedId, state.img);
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

function* writePostSaga() {
  yield takeLatest(CARROT, writeCarrotPostSaga);
  yield takeLatest(GROUP, writeGroupPostSaga);
  yield takeLatest(PICTURE, postImgSaga);
}

export default writePostSaga;
