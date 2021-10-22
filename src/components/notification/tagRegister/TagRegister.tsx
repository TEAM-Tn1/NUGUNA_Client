import React from 'react';
import * as S from './style';
import { Tag } from './tag/index';
import { delete_icon, exit_icon } from '../../../assets/alarm';

//더미데이터
const testArray: number[] = [];
for (let i = 0; i < 10; i++) {
  testArray.push(i);
}
const Data = {
  tag: '인강',
};
const { tag } = Data;

const TagRegister = () => {
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
        {testArray.map((_, index) => {
          return (
            <S.TagList key={index}>
              <Tag tag={tag} />
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
