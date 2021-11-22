import { all } from 'redux-saga/effects';
import post from './post';
import detailPost from './detailPost';
import writePostSaga from './writePost';
import chatListSaga from './chatList';
import adminQuestionSaga from './admin/list/Question';
import adminReportPostSaga from './admin/list/ReportPost';
import adminReportUserSaga from './admin/list/ReportUser';

export default function* rootSaga() {
  yield all([post(), detailPost(), adminListSaga(), writePostSaga(), chatListSaga()]);
}
