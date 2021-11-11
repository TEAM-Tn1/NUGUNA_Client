import { combineReducers } from 'redux';
import postReducer from './post';
import adminListReducer from './admin';

const rootReducer = combineReducers({ post: postReducer, adminList: adminListReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
