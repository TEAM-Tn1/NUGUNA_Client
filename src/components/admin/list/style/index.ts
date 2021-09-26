import styled from 'styled-components';
import { color } from '../../../../style/index';

export const List = styled.article`
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
    padding: 0 18px;
    font-size: 18px;
    border-left: 1px solid rgba(117, 79, 68, 0.5);
  }

  & div {
    width: 280px;
    display: flex;
    justify-content: space-between;
    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 66px;
      & img {
        width: 17px;
        height: 13px;
      }
    }
  }
`;
