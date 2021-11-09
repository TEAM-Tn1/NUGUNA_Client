import { all } from 'redux-saga/effects';
import post from './post';
import { adminListSaga } from './admin';

export default function* rootSaga() {
  yield all([post(), adminListSaga()]);
}
