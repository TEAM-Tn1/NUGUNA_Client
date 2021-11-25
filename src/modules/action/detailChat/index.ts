import { createAction } from 'typesafe-actions';
import { detailChatResponse } from '../../../models/dto/response/detailChatResponse';
import { error } from '../../../models/error';
import {
  CHAT_CONTENT,
  CHAT_CONTENT_FAILURE,
  CHAT_CONTENT_SUCCESS,
  MESSAGE,
  PAGE,
  ROOM_ID,
} from './interface';

export const chatContent = createAction(CHAT_CONTENT)();
export const chatContentSuccess = createAction(CHAT_CONTENT_SUCCESS)<Array<detailChatResponse>>();
export const chatContentFailure = createAction(CHAT_CONTENT_FAILURE)<error>();
export const setPage = createAction(PAGE)<number>();
export const setRoomId = createAction(ROOM_ID)<string>();
export const setMessage = createAction(MESSAGE)<detailChatResponse>();

export type detailChatActionType =
  | ReturnType<typeof chatContent>
  | ReturnType<typeof chatContentSuccess>
  | ReturnType<typeof chatContentFailure>
  | ReturnType<typeof setPage>
  | ReturnType<typeof setRoomId>
  | ReturnType<typeof setMessage>;
