import AdminListState from './interface';
import { adminActionType } from '../../action/admin';
import {
  REPORT_USER_LIST,
  REPORT_USER_LIST_SUCCESS,
  REPORT_POST_LIST,
  REPORT_POST_LIST_SUCCESS,
  REPORT_POST_LIST_FAILURE,
  QUESTION_LIST,
  QUESTION_LIST_SUCCESS,
  QUESTION_LIST_FAILURE,
  PAGE,
  REPORT_USER_LIST_FAILURE,
} from '../../action/admin/interface';

const initState: AdminListState = {
  list: [],
  page: 0,
  isHaveNextPage: false,
  isSuccessGetList: undefined,
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const adminListRducer = (
  state: AdminListState = initState,
  action: adminActionType,
): AdminListState => {
  switch (action.type) {
    case REPORT_USER_LIST:
      return {
        ...state,
        isSuccessGetList: undefined,
      };
    case REPORT_USER_LIST_SUCCESS:
      if (action.payload.length !== 0)
        return {
          ...state,
          list: state.list.concat(action.payload),
          isSuccessGetList: true,
          isHaveNextPage: true,
        };
      else
        return {
          ...state,
          isHaveNextPage: false,
        };
    case REPORT_USER_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessGetList: false,
      };
    case REPORT_POST_LIST:
      return {
        ...state,
        isSuccessGetList: undefined,
      };
    case REPORT_POST_LIST_SUCCESS:
      if (action.payload.length !== 0)
        return {
          ...state,
          list: state.list.concat(action.payload),
          isSuccessGetList: true,
          isHaveNextPage: true,
        };
      else
        return {
          ...state,
          isHaveNextPage: false,
        };
    case REPORT_POST_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessGetList: false,
      };
    case QUESTION_LIST:
      return {
        ...state,
        isSuccessGetList: undefined,
      };
    case QUESTION_LIST_SUCCESS:
      if (action.payload.length !== 0)
        return {
          ...state,
          list: state.list.concat(action.payload),
          isSuccessGetList: true,
          isHaveNextPage: true,
        };
      else
        return {
          ...state,
          isHaveNextPage: false,
        };
    case QUESTION_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessGetList: false,
      };
    case PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default adminListRducer;
