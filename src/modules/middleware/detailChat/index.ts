import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getDetailChat } from '../../../util/api/detailChat';
import { CHAT_CONTENT, GET_INFO } from '../../action/detailChat/interface';
import { reducerType } from '../../reducer';
import DetailChatState from '../../reducer/detailChat/interface';

const getStateFunc = (state: reducerType): DetailChatState => state.detailChat;

const detailChatGetSaga = function* (): any {
  const actionType = 'DETAILCHAT/CHAT_CONTENT';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getDetailChat, accessToken, state.roomId, state.page);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: actionType },
      });
    } else {
      console.log(error);
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

const infoGetSaga = function* (): any {
  const actionType = 'DETAILCHAT/GET_INFO';
  const SUCCESS = `${actionType}_SUCCESS`;
  const FAILURE = `${actionType}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getDetailChat, accessToken, state.roomId, state.page);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: actionType },
      });
    } else {
      console.log(error);
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

function* detailChatSaga() {
  yield takeLatest(CHAT_CONTENT, detailChatGetSaga);
  yield takeLatest(GET_INFO, infoGetSaga);
}

export default detailChatSaga;
