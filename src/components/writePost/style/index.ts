import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const WritePost = styled.div`
  max-width: 500px;
  height: calc(100vh - 100px);
  margin: 0 auto;
  margin-top: 100px;
`;

export const ContentBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  overflow-y: auto;
`;

export const PrevLine = styled.div`
  width: 86.1%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 20px;
  > img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  > p {
    font-size: 16px;
  }
`;

export const Title = styled.p`
  width: 86.1%;
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto;
`;

export const TitleAndInput = styled.div`
  width: 86.1%;
  margin: 0 auto;
  margin-bottom: 30px;
  > p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    > span {
      font-size: 14px;
      color: red;
      margin-left: 4px;
    }
  }
  > input {
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
  }
`;
