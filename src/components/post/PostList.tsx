import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import PostContent from './PostContent';
import { postListType } from '../../models/dto/response/postResponse';
import { useInView } from 'react-intersection-observer';

interface Props {
  type: string;
  page: number;
  postList: Array<postListType>;
  setPage: (payload: number) => void;
}

const PostList: FC<Props> = props => {
  const { type, postList, page, setPage } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const totalpage = 5;
  const { ref, inView } = useInView();

  useEffect(() => {
    if (postList.length !== 0) {
      if (!loading) {
        setLoading(true);
        if (page + 1 < totalpage) {
          setPage(page + 1);
          setLoading(false);
        }
      }
    }
  }, [inView]);

  return (
    <S.PostList>
      {postList &&
        postList.map(data => {
          const date = data.last_modify_date;
          const people = `${data.current_cout}/${data.head_count}`;
          return (
            <PostContent
              medium={data.medium}
              title={data.title}
              money={data.price}
              like={data.count}
              type={type}
              date={date}
              people={people}
              hashtag={data.tags}
              isLikeClick={data.like}
            />
          );
        })}
      {!loading && <div ref={ref} />}
    </S.PostList>
  );
};

export default PostList;
