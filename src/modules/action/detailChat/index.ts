import { createAction } from 'typesafe-actions';
import { detailChatResponse, infoResponse } from '../../../models/dto/response/detailChatResponse';
import { error } from '../../../models/error';
import {
  CHAT_CONTENT,
  CHAT_CONTENT_FAILURE,
  CHAT_CONTENT_SUCCESS,
  MESSAGE,
  PAGE,
  ROOM_ID,
  GET_INFO,
  GET_INFO_SUCCESS,
  GET_INFO_FAILURE,
} from './interface';

export const chatContent = createAction(CHAT_CONTENT)();
export const chatContentSuccess = createAction(CHAT_CONTENT_SUCCESS)<Array<detailChatResponse>>();
export const chatContentFailure = createAction(CHAT_CONTENT_FAILURE)<error>();
export const setPage = createAction(PAGE)<number>();
export const setRoomId = createAction(ROOM_ID)<string>();
export const setMessage = createAction(MESSAGE)<detailChatResponse>();
export const getInfo = createAction(GET_INFO)();
export const getInfoSuccess = createAction(GET_INFO_SUCCESS)<infoResponse>();
export const getInfoFailure = createAction(GET_INFO_FAILURE)<error>();

export type detailChatActionType =
  | ReturnType<typeof chatContent>
  | ReturnType<typeof chatContentSuccess>
  | ReturnType<typeof chatContentFailure>
  | ReturnType<typeof setPage>
  | ReturnType<typeof setRoomId>
  | ReturnType<typeof setMessage>;
  | ReturnType<typeof getInfo>
  | ReturnType<typeof getInfoSuccess>
  | ReturnType<typeof getInfoFailure>;
