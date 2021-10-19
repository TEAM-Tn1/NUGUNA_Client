export interface postResponse {
  postList: Array<postListType>;
}

export type postListType = {
  feed_id: number;
  title: string;
  description: string;
  price: number;
  tags: string;
  medium: string;
  last_modify_date: string;
  count: number;
  like: boolean;
  head_count: number;
  current_cout: number;
  recruitment_date: string;
};
