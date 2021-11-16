import { combineReducers } from 'redux';
import detailPostReducer from './detailPost';
import postReducer from './post';

const rootReducer = combineReducers({ post: postReducer, detailPost: detailPostReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
