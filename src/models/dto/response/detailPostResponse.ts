export type detailPostResponse = {
  feed_id: number;
  title: string;
  description: string;
  price: number;
  tag: Array<string>;
  medium: string;
  lastModifyDate: string;
  like: boolean;
  count: number;
  head_count: number;
  current_head_count: number;
  date: string;
  user_info: {
    writer_email: string;
    writer_name: string;
  };
  is_used_item: boolean;
};
