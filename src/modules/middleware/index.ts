import { all } from 'redux-saga/effects';
import post from './post';
import detailPost from './detailPost';

export default function* rootSaga() {
  yield all([post(), detailPost()]);
}
