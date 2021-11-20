import { combineReducers } from 'redux';
import detailPostReducer from './detailPost';
import postReducer from './post';
import { adminReportPostListReducer, adminReportUserListReducer } from './admin';
import adminQuestionListReducer from './admin/list/QuestionState';
import writePostReducer from './writerPost';
import chatListReducer from './chatList';

const rootReducer = combineReducers({
  post: postReducer,
  detailPost: detailPostReducer,
  adminQuestionList: adminQuestionListReducer,
  adminReportPostList: adminReportPostListReducer,
  adminReportUserList: adminReportUserListReducer,
  writePost: writePostReducer,
  chatList: chatListReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
