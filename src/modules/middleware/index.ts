import { all } from 'redux-saga/effects';
import post from './post';
import detailPost from './detailPost';
import adminListSaga from './admin/list';
import writePostSaga from './writePost';
import chatListSaga from './chatList';
import searchSaga from './search';

export default function* rootSaga() {
  yield all([post(), detailPost(), adminListSaga(), writePostSaga(), chatListSaga(), searchSaga()]);
}
