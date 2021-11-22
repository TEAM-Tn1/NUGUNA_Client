import { combineReducers } from 'redux';
import detailPostReducer from './detailPost';
import postReducer from './post';
import {
  adminQuestionListReducer,
  adminReportPostListReducer,
  adminReportUserListReducer,
} from './admin';

const rootReducer = combineReducers({
  post: postReducer,
  detailPost: detailPostReducer,
  adminQuestionList: adminQuestionListReducer,
  adminReportPostList: adminReportPostListReducer,
  adminReportUserList: adminReportUserListReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
