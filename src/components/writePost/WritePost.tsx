import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header';
import { prevBtn } from '../../assets/writePost';
import {
  GROUPINFO,
  PAYINPUT,
  PAYTITLE,
  POSTTITLEANDHASHTAG,
  TRADETITLE,
} from '../../constance/writePost';
import Picture from './Picture';
import ExplainPost from './ExplainPost';
import PostInfo from './PostInfo';
import { useLocation } from 'react-router';
import { CHECKBTN } from '../../constance/writePost';
import { useDispatch } from 'react-redux';
import { CARROT, GROUP, PICTURE } from '../../modules/action/writePost/interface';

interface Props {
  title: string;
  description: string;
  price: number;
  tags: Array<string>;
  date: string;
  headCount: number;
  img: Array<File>;
  isSuccessSavePost: boolean | undefined;
  setTitle: (payload: string) => void;
  setDescription: (payload: string) => void;
  setPrice: (payload: number) => void;
  setTags: (payload: Array<string>) => void;
  setDate: (payload: string) => void;
  setHeadCount: (payload: number) => void;
  setImg: (payload: Array<File>) => void;
}

const WritePost: FC<Props> = props => {
  const {
    title,
    description,
    price,
    tags,
    date,
    img,
    headCount,
    isSuccessSavePost,
    setTitle,
    setDescription,
    setPrice,
    setTags,
    setDate,
    setHeadCount,
    setImg,
  } = props;
  const type = useLocation().pathname.slice(12);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (type === 'trade') {
      if (title !== '' && description !== '' && img.length !== 0) setDisabled(true);
      else setDisabled(false);
    } else {
      if (title !== '' && description !== '' && date !== '' && headCount !== 0 && img.length !== 0)
        setDisabled(true);
      else setDisabled(false);
    }
  }, [title, description, date, headCount, img]);

  const postInfo = useMemo(() => {
    if (type === 'trade')
      return <PostInfo id={'pay'} title={PAYTITLE} placeholder={PAYINPUT} setPrice={setPrice} />;
    else if (type === 'group')
      return GROUPINFO.map(data => {
        return (
          <PostInfo
            key={data.id}
            id={data.id}
            title={data.content}
            placeholder={data.placeholder}
            setPrice={setPrice}
            setHeadCount={setHeadCount}
            setDate={setDate}
          />
        );
      });
  }, [type]);

  const titleInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const hashtagInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTags(event.currentTarget.value.split(','));
  };

  useEffect(() => {
    if (isSuccessSavePost) dispatch({ type: PICTURE });
  }, [isSuccessSavePost]);

  const checkBtnClickHandler = () => {
    if (type === 'trade') dispatch({ type: CARROT });
    else if (type === 'group') dispatch({ type: GROUP });
  };

  return (
    <>
      <Header />
      <S.WritePost>
        <S.ContentBox>
          <S.PrevLine>
            <img src={prevBtn} alt='prev' />
            <p>돌아가기</p>
          </S.PrevLine>
          <S.Title>{TRADETITLE}</S.Title>
          {POSTTITLEANDHASHTAG.map(data => {
            return (
              <S.TitleAndInput isHashtag={data.id === 'hashtag' ? true : false}>
                <S.SubTitle>
                  {data.content}
                  {data.isNotNull && <span>*</span>}
                </S.SubTitle>
                <input
                  placeholder={data.placeholder}
                  onChange={
                    data.id === 'hashtag' ? hashtagInputChangeHandler : titleInputChangeHandler
                  }
                />
              </S.TitleAndInput>
            );
          })}
          <Picture img={img} setImg={setImg} />
          <ExplainPost setDescription={setDescription} />
          {postInfo}
          <S.CheckBtn isClick={disabled} onClick={!disabled ? () => {} : checkBtnClickHandler}>
            <p>{CHECKBTN}</p>
          </S.CheckBtn>
        </S.ContentBox>
      </S.WritePost>
    </>
  );
};

export default WritePost;
