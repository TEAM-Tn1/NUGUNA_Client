import React, { FC } from 'react';
import * as S from './style';
import PostContent from './PostContent';
import { postListType } from '../../models/dto/response/postResponse';

interface Props {
  type: string;
  postList: Array<postListType>;
}

const PostList: FC<Props> = props => {
  const { type, postList } = props;
  return (
    <S.PostList>
      {postList.map(data => {
        const date = data.last_modify_date;
        const people = `${data.current_cout}/${data.head_count}`;
        const hashtag = data.tags.split(',');
        return (
          <PostContent
            title={data.title}
            money={data.price}
            like={data.count}
            type={type}
            date={date}
            people={people}
            hashtag={hashtag}
          />
        );
      })}
    </S.PostList>
  );
};

export default PostList;
