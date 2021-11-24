import React from 'react';
import * as S from './style';
import { search, alram } from '../../assets/header';
import useSearch from '../../util/hooks/search';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { SEARCH } from '../../modules/action/search/interface';

const Header = () => {
  const { state, setState } = useSearch();
  const history = useHistory();
  const dispatch = useDispatch();
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState.setTitle(event.currentTarget.value);
  };

  const inputIconClickHandler = () => {
    setState.setSearchList();
    history.push('/search');
    dispatch({ type: SEARCH });
  };

  return (
    <S.Header>
      <S.Wrapper>
        <S.SearchInputBox>
          <S.SearchImg src={search} onClick={inputIconClickHandler} />
          <S.SearchInput type='text' onChange={inputChangeHandler} defaultValue={state.title} />
        </S.SearchInputBox>
        <S.AlramBox>
          <S.AlramImg src={alram} />
          <S.AlramCheck />
        </S.AlramBox>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
