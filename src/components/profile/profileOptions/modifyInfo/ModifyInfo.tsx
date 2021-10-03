import React, { useState } from 'react';
import OptionsTemplate from '../../../default/profile';
import Footer from '../../../footer';
import Header from '../../../header';
import * as S from './style';
import { modify } from '../../../../assets/profile';
import { INPUT_ELEMENT } from '../../../../constance/modifyInfo';

const ModifyInfo = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <S.Wrapper>
      <Header />
      <OptionsTemplate
        top={'320px'}
        image={modify}
        text={'내 정보 수정하기'}
        setIsShow={setIsShow}
        isShow={isShow}
      />
      {isShow && (
        <S.ModifyForm>
          {INPUT_ELEMENT.map(ele => {
            return (
              <S.InputWrapper key={ele.id}>
                <input type='text' id={ele.id} required />
                <label htmlFor={ele.id}>{ele.text}</label>
              </S.InputWrapper>
            );
          })}
          <button>확인</button>
        </S.ModifyForm>
      )}
      <Footer />
    </S.Wrapper>
  );
};

export default ModifyInfo;
