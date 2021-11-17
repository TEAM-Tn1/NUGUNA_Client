import { error } from '../../../../models/error';

interface WritePostState {
  title: string;
  description: string;
  price: number;
  tags: Array<string>;
  date: string;
  headCount: number;
  img: Array<File>;
  feedId: number;
  error: error;
  isSuccessSavePost: boolean | undefined;
  isSuccessSavePicture: boolean | undefined;
}

export default WritePostState;
