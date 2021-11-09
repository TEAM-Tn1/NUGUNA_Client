import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Footer, Header } from '..';
import information from '../../util/api/information';
import { Logo } from '../logo';
import * as S from './style';

const Information = () => {
  const [isFillAll, setIsFillAll] = useState(false);
  const [inputs, setInputs] = useState({
    dormitory: '',
    bank_name: '',
    account_number: '',
  });
  const { dormitory, bank_name, account_number } = inputs;
  const { push } = useHistory();

  useEffect(() => {
    if (dormitory && bank_name && account_number) {
      setIsFillAll(true);
    } else {
      setIsFillAll(false);
    }
  }, [dormitory, bank_name, account_number]);

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (isFillAll) {
      const account = bank_name + ' ' + account_number;
      information
        .setInformation(dormitory, account)
        .then(res => {
          push('/main');
        })
        .catch(err => {
          console.log(err, '12312');
        });
    }
  };

  return (
    <S.Wrapper>
      <Header />
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.InfoContainer isFillAll={isFillAll} onSubmit={onSubmit}>
        <S.DormitoryInfoBox>
          <span>정보</span>
          <S.InputWrapper>
            <input
              name='dormitory'
              value={dormitory}
              onChange={onChange}
              type='text'
              id='dormitory'
              required
            />
            <label htmlFor='dormitory'>기숙사 호실</label>
          </S.InputWrapper>
        </S.DormitoryInfoBox>
        <S.AccountInfoBox>
          <span>계좌</span>
          <S.InputWrapper>
            <input
              name='bank_name'
              value={bank_name}
              onChange={onChange}
              type='text'
              id='bank_name'
              required
            />
            <label htmlFor='bank_name'>은행명</label>
          </S.InputWrapper>
          <S.InputWrapper>
            <input
              name='account_number'
              value={account_number}
              onChange={onChange}
              type='text'
              id='account_number'
              required
            />
            <label htmlFor='account_number'>계좌번호</label>
          </S.InputWrapper>
        </S.AccountInfoBox>
        <button>가입하기</button>
      </S.InfoContainer>
      <Footer />
    </S.Wrapper>
  );
};

export default Information;
