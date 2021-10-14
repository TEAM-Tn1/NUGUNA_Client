import React, { FC } from 'react';
import * as S from './style';

interface Props {
  title: string;
  placeholder: string;
}

const PostInfo: FC<Props> = props => {
  const { title, placeholder } = props;
  return (
    <S.PostInfoContent>
      <S.SubTitle>
        {title}
        <span>*</span>
      </S.SubTitle>
      <input placeholder={placeholder} />
    </S.PostInfoContent>
  );
};

export default PostInfo;
