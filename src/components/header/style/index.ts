import styled from 'styled-components';
import { color } from '../../../style';

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: calc(constant(safe-area-inset-top) + 0px);
  top: calc(env(safe-area-inset-top) + 0px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 7%;
  max-width: 500px;
  background-color: ${color.mainColor};
  > div {
    margin-top: 20px;
  }
`;

export const SearchInputBox = styled.div`
  width: 70%;
  height: 36px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 5px;
`;

export const SearchImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 100%;
  border: none;
  font-size: 18px;
`;

export const AlramBox = styled.div`
  width: 21px;
  height: 24px;
  position: relative;
`;

export const AlramImg = styled.img`
  width: 21px;
  height: 24px;
`;

export const AlramCheck = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 7px;
  background-color: red;
  position: absolute;
  top: 0px;
  right: 0px;
`;