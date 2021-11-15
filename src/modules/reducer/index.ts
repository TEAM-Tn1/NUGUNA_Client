import { combineReducers } from 'redux';
import postReducer from './post';
import { adminReportPostListReducer, adminReportUserListReducer } from './admin';
import adminQuestionListReducer from './admin/list/QuestionState';

const rootReducer = combineReducers({
  post: postReducer,
  adminQuestionList: adminQuestionListReducer,
  adminReportPostList: adminReportPostListReducer,
  adminReportUserList: adminReportUserListReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
