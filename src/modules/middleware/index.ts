import { all } from 'redux-saga/effects';
import post from './post';
import adminList from './admin'

export default function* rootSaga() {
  yield all([
    post(),
    adminList(),
  ]);
}
