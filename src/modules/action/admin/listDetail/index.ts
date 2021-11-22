import { createAction } from 'typesafe-actions';
import { error } from '../../../../models/error';
import {
  QUESTION_LIST_DETAIL,
  QUESTION_LIST_DETAIL_SUCCESS,
  QUESTION_LIST_DETAIL_FAILURE,
  REPORT_POST_LIST_DETAIL,
  REPORT_POST_LIST_DETAIL_SUCCESS,
  REPORT_POST_LIST_DETAIL_FAILURE,
  REPORT_USER_LIST_DETAIL,
  REPORT_USER_LIST_DETAIL_SUCCESS,
  REPORT_USER_LIST_DETAIL_FAILURE,
} from '../interface';

export const questionListDetail = createAction(QUESTION_LIST_DETAIL)<number | string>();
export const questionListDetailSuccess = createAction(QUESTION_LIST_DETAIL_SUCCESS)<string>();
export const questionListDetailFailure = createAction(QUESTION_LIST_DETAIL_FAILURE)<error>();
export const reportPostListDetail = createAction(REPORT_POST_LIST_DETAIL)();
export const reportPostListDetailSuccess = createAction(REPORT_POST_LIST_DETAIL_SUCCESS)<string>();
export const reportPostListDetailFailure = createAction(REPORT_POST_LIST_DETAIL_FAILURE)<error>();
export const reportUserListDetail = createAction(REPORT_USER_LIST_DETAIL)();
export const reportUserListDetailSuccess = createAction(REPORT_USER_LIST_DETAIL_SUCCESS)<string>();
export const reportUserListDetailFailure = createAction(REPORT_USER_LIST_DETAIL_FAILURE)<error>();

export type adminListDetailType =
  | ReturnType<typeof questionListDetail>
  | ReturnType<typeof questionListDetailSuccess>
  | ReturnType<typeof questionListDetailFailure>
  | ReturnType<typeof reportPostListDetail>
  | ReturnType<typeof reportPostListDetailSuccess>
  | ReturnType<typeof reportPostListDetailFailure>
  | ReturnType<typeof reportUserListDetail>
  | ReturnType<typeof reportUserListDetailSuccess>
  | ReturnType<typeof reportUserListDetailFailure>;
