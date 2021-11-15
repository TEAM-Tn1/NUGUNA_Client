import adminList from './list';

export default function* adminListSaga() {
  yield [adminList()];
}
