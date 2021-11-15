import { error } from '../../../../models/error';

interface DetailPostState {
  feedId: number;
  title: string;
  description: string;
  price: number;
  tag: Array<string>;
  medium: string;
  lastModifyDate: string;
  like: boolean;
  count: number;
  headCount: number;
  currentHeadCount: number;
  date: string;
  userInfo: {
    writerEmail: string;
    writerName: string;
  };
  isUsedItem: boolean;
  isSuccessGetDetailPost: boolean | undefined;
  isSuccessLikePost: boolean | undefined;
  isSuccessDeleteLikePost: boolean | undefined;
  error: error;
}

export default DetailPostState;
