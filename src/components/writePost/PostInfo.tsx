import React, { FC } from 'react';
import * as S from './style';

interface Props {
  id: string;
  title: string;
  placeholder: string;
  setPrice?: (payload: number) => void;
  setDate?: (payload: string) => void;
  setHeadCount?: (payload: number) => void;
}

const PostInfo: FC<Props> = props => {
  const { id, title, placeholder, setPrice, setDate, setHeadCount } = props;

  const inputChangeHander = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (id === 'pay') setPrice && setPrice(Number(event.currentTarget.value));
    else if (id === 'people') setHeadCount && setHeadCount(Number(event.currentTarget.value));
    else if (id === 'date') setDate && setDate(event.currentTarget.value);
  };

  return (
    <S.PostInfoContent>
      <S.SubTitle>
        {title}
        <span>*</span>
      </S.SubTitle>
      <input placeholder={placeholder} onChange={inputChangeHander} />
    </S.PostInfoContent>
  );
};

export default PostInfo;
