import { combineReducers } from 'redux';
import detailPostReducer from './detailPost';
import postReducer from './post';
import {
  adminQuestionListReducer,
  adminReportPostListReducer,
  adminReportUserListReducer,
  adminQuestionDetailReducer
} from './admin';

//import  from './admin/list/QuestionState';

const rootReducer = combineReducers({
  post: postReducer,
  detailPost: detailPostReducer,
  adminQuestionList: adminQuestionListReducer,
  adminReportPostList: adminReportPostListReducer,
  adminReportUserList: adminReportUserListReducer,
  adminQuestionDetail: adminQuestionDetailReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
