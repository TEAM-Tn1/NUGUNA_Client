import { createAction } from 'typesafe-actions';
import { error } from '../../../../models/error';
import {
  QUESTION_LIST_DETAIL,
  QUESTION_LIST_DETAIL_SUCCESS,
  QUESTION_LIST_DETAIL_FAILURE,
} from '../interface';

export const questionListDetail = createAction(QUESTION_LIST_DETAIL)();
export const questionListDetailSuccess = createAction(QUESTION_LIST_DETAIL_SUCCESS)<string>();
export const questionListDetailFailure = createAction(QUESTION_LIST_DETAIL_FAILURE)<error>();

export type adminListDetailType =
  | ReturnType<typeof questionListDetail>
  | ReturnType<typeof questionListDetailSuccess>
  | ReturnType<typeof questionListDetailFailure>;
