import { searchListType } from '../../../../models/dto/response/searchResponse';
import { error } from '../../../../models/error';

interface SearchState {
  title: string;
  type: string;
  page: number;
  order: { newest: boolean; like: boolean };
  typeClick: { trade: boolean; group: boolean };
  searchList: Array<searchListType>;
  isHaveNextPage: boolean;
  isSuccessGetSearchList: boolean | undefined;
  error: error;
}

export default SearchState;
