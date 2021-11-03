import { listResponse } from '../../../../models/dto/response/adminResponse';
import { error } from '../../../../models/error';

interface AdminListState {
  list: listResponse;
  page: number;
  isHaveNextPage: boolean;
  isSuccessGetList: boolean | undefined;
  error: error;
}
export default AdminListState;
