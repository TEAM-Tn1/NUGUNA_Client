import { all } from 'redux-saga/effects';
import post from './post';
import detailPost from './detailPost';
import adminListSaga from './admin/list';

export default function* rootSaga() {
  yield all([post(), detailPost(), adminListSaga()]);
}
