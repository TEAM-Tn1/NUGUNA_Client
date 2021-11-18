import { AdminQuestionDetailState } from '../interface';
import { adminActionType } from '../../../action/admin';
import {
  QUESTION_LIST_DETAIL,
  QUESTION_LIST_DETAIL_SUCCESS,
  QUESTION_LIST_DETAIL_FAILURE,
} from '../../../action/admin/interface';

const initState: AdminQuestionDetailState = {
  description: '',
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const adminQuestionDetailReducer = (
  state: AdminQuestionDetailState = initState,
  action: adminActionType,
): AdminQuestionDetailState => {
  switch (action.type) {
    case QUESTION_LIST_DETAIL:
      return {
        ...state,
      };
    case QUESTION_LIST_DETAIL_SUCCESS:
      return {
        ...state,
        description: '',
      };
    case QUESTION_LIST_DETAIL_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default adminQuestionDetailReducer;
