import { error } from '../../../../models/error';

interface WritePostState {
  title: string;
  description: string;
  price: number;
  tags: Array<string>;
  date: string;
  headCount: number;
  error: error;
  isSuccessSavePost: boolean | undefined;
}

export default WritePostState;
