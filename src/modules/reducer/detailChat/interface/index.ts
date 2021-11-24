import { detailChatResponse } from '../../../../models/dto/response/detailChatResponse';
import { error } from '../../../../models/error';

interface DetailChatState {
  page: number;
  roomId: string;
  chatContent: Array<detailChatResponse>;
  error: error;
  isSuccessGetDetailChat: boolean | undefined;
}

export default DetailChatState;
