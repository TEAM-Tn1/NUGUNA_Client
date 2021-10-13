import styled from 'styled-components';
import { color } from '../../../../../style/index';

export const MainContest = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 0 8px 0;
  height: 66px;
  align-items: center;
  justify-content: auto;
  border-top: solid 1px ${color.subColor};
  margin: 0;

  & p {
    color: #000000;
    font-size: 14px;
    width: 66px;
    min-width: 66px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & h3 {
    color: #000000;
    font-weight: normal;
    width: 708px;
    min-width: 534px;
    height: 42px;
    padding: 0 18px;
    font-size: 18px;
    border-left: solid 1px ${color.subColor};
    display: flex;
    align-items: center;
  }

  & div {
    width: 280px;
    display: flex;
    justify-content: space-between;
    margin-right: 18px;
    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 66px;
      margin: 0;
      & img {
        width: 17px;
        height: 13px;
      }
    }
  }
`;

export const Detail = styled.div`
  border-top: solid 1px ${color.subColor};
  margin: 0 18px;
  & hr {
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 20px 0;
  & span {
    width: 48px;
    min-width: 48px;
    height: 42px;
    font-size: 16px;
    display: flex;
    align-items: center;
    border-right: solid 1px ${color.subColor};
  }

  & div {
    min-width: 763px;
    display: flex;
    flex-direction: column;
  }

  & p {
    width: 100%;
    margin-left: 18px;
    padding-right: 18px;
    font-size: 15px;
  }

  & img {
    max-width: 30%;
    margin: 18px;
  }
`;

export const Answer = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    display: flex;
    gap: 0px 15px;
  }

  & p {
    font-size: 16px;
  }

  & div:last-child {
    display: flex;
    justify-content: flex-end;
  }

  & textarea {
    resize: none;
    border: none;
    margin: 10px 0;
    background-color: transparent;
    height: 76px;
    font-size: 15px;
  }

  & button {
    width: 60px;
    height: 30px;
    border-radius: 15px;
    border: solid 1px ${color.subColor};
    color: ${color.subColor};
    background-color: #ffffff;
    margin-bottom: 20px;
  }
`;
