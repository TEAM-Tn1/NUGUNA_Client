import { createAction } from 'typesafe-actions';
import { listResponse } from '../../../models/dto/response/adminResponse';
import { error } from '../../../models/error';
import {
  REPORT_USER_LIST,
  REPORT_USER_LIST_SUCCESS,
  REPORT_USER_LIST_FAILURE,
  REPORT_POST_LIST,
  REPORT_POST_LIST_SUCCESS,
  REPORT_POST_LIST_FAILURE,
  QUESTION_LIST,
  QUESTION_LIST_SUCCESS,
  QUESTION_LIST_FAILURE,
  PAGE,
} from './interface';

export const reportUserList = createAction(REPORT_USER_LIST)();
export const reportUserListSuccess = createAction(REPORT_USER_LIST_SUCCESS)<listResponse>();
export const reportUserListFailure = createAction(REPORT_USER_LIST_FAILURE)<error>();
export const reportPostList = createAction(REPORT_POST_LIST)();
export const reportPostListSuccess = createAction(REPORT_POST_LIST_SUCCESS)<listResponse>();
export const reportPostListFailure = createAction(REPORT_POST_LIST_FAILURE)<error>();
export const questionList = createAction(QUESTION_LIST)();
export const questionListSuccess = createAction(QUESTION_LIST_SUCCESS)<listResponse>();
export const questionListFailure = createAction(QUESTION_LIST_FAILURE)<error>();
export const setPage = createAction(PAGE)<number>();

export type adminActionType =
  | ReturnType<typeof reportUserList>
  | ReturnType<typeof reportUserListSuccess>
  | ReturnType<typeof reportUserListFailure>
  | ReturnType<typeof reportPostList>
  | ReturnType<typeof reportPostListSuccess>
  | ReturnType<typeof reportPostListFailure>
  | ReturnType<typeof questionList>
  | ReturnType<typeof questionListSuccess>
  | ReturnType<typeof questionListFailure>
  | ReturnType<typeof setPage>;
