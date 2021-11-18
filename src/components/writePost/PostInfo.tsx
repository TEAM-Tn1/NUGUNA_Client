import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';

interface Props {
  id: string;
  title: string;
  placeholder: string;
  price?: number;
  headCount?: number;
  date?: string;
  setPrice?: (payload: number) => void;
  setDate?: (payload: string) => void;
  setHeadCount?: (payload: number) => void;
}

const PostInfo: FC<Props> = props => {
  const { id, price, title, placeholder, headCount, date, setPrice, setDate, setHeadCount } = props;
  const [defaultvalue, setDefaultvalue] = useState<number | string>(0);

  const inputChangeHander = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (id === 'pay') setPrice && setPrice(Number(event.currentTarget.value));
    else if (id === 'people') setHeadCount && setHeadCount(Number(event.currentTarget.value));
    else if (id === 'date') setDate && setDate(event.currentTarget.value);
  };

  useEffect(() => {
    if (id === 'pay') setDefaultvalue(price as number);
    else if (id === 'people') setDefaultvalue(headCount as number);
    else if (id === 'date') setDefaultvalue(date as string);
  }, [id, price, date, headCount]);

  const input = useMemo(() => {
    return (
      <input placeholder={placeholder} onChange={inputChangeHander} defaultValue={defaultvalue} />
    );
  }, [defaultvalue, placeholder]);

  return (
    <S.PostInfoContent>
      <S.SubTitle>
        {title}
        <span>*</span>
      </S.SubTitle>
      {input}
    </S.PostInfoContent>
  );
};

export default PostInfo;
