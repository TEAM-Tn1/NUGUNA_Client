import { combineReducers } from 'redux';
import postReducer from './post';

const rootReducer = combineReducers({ post: postReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
