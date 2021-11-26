import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Tag } from './tag/index';
import { delete_icon, exit_icon } from '../../../assets/alarm';
import tagGet from '../../../util/api/notificate';

const TagRegister = () => {
  const accessToken = localStorage.getItem('access_token');

  const [tag, setTag] = useState<any>();

  const getTag = () => {
    tagGet
      .setTagGet(accessToken)
      .then(res => {
        console.log(res.data);
        setTag(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTag();
  }, []);

  return (
    <S.Wrapper>
      <S.AlarmHeader>
        <div>
          <img src={exit_icon} alt='' />
        </div>
        <h2>알람</h2>
        <div></div>
      </S.AlarmHeader>
      <S.Register>
        <input type='text' placeholder='등록할 태그를 입력하세요.' />
        <button>등록하기</button>
      </S.Register>
      <h1>등록된 태그</h1>
      <article>
        {tag?.map((tagItem: any, index: number) => {
          return (
            <S.TagList key={index}>
              <Tag tag={tagItem.tag} />
              <img src={delete_icon} alt='' />
            </S.TagList>
          );
        })}
      </article>
      <button>완료</button>
    </S.Wrapper>
  );
};

export default TagRegister;
