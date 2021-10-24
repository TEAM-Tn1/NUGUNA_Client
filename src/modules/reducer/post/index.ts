import PostState from './interface';
import { postActionType } from '../../action/post';
import {
  ORDER,
  TYPE,
  PAGE,
  CARROT_POSTLIST,
  CARROT_POSTLIST_SUCCESS,
  CARROT_POSTLIST_FAILURE,
  GROUP_POSTLIST,
  GROUP_POSTLIST_SUCCESS,
  GROUP_POSTLIST_FAILURE,
  TYPECLICK,
} from '../../action/post/interface';

const initState: PostState = {
  postList: [],
  type: 'trade',
  order: { newest: true, like: false },
  typeClick: { trade: true, group: false },
  page: 0,
  isSuccessGetPostList: undefined,
  isHaveNextPage: false,
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const postReducer = (state: PostState = initState, action: postActionType): PostState => {
  switch (action.type) {
    case CARROT_POSTLIST:
      return {
        ...state,
        isSuccessGetPostList: undefined,
      };
    case CARROT_POSTLIST_SUCCESS:
      if (action.payload.length !== 0)
        return {
          ...state,
          postList: state.postList.concat(action.payload),
          isSuccessGetPostList: true,
          isHaveNextPage: true,
        };
      else
        return {
          ...state,
          isHaveNextPage: false,
        };
    case CARROT_POSTLIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessGetPostList: false,
      };
    case GROUP_POSTLIST:
      return {
        ...state,
        isSuccessGetPostList: undefined,
      };
    case GROUP_POSTLIST_SUCCESS:
      return {
        ...state,
        postList: state.postList.concat(action.payload),
        isSuccessGetPostList: true,
      };
    case GROUP_POSTLIST_FAILURE:
      return {
        ...state,
        isSuccessGetPostList: false,
      };
    case TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case TYPECLICK:
      return {
        ...state,
        typeClick: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
