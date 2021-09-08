import styled from 'styled-components';
import { color } from '../../../../style/index';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 157, 134, 0.2);
  width: 400px;
  height: 100vh;
`;

export const Called = styled.div`
  width: 100%;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    border-top: solid 1px ${color.subColor};
  }
  & a:last-child {
    border-bottom: solid 1px ${color.subColor};
  }

  & p {
    font-size: 28px;
    font-weight: bold;
    color: ${color.subColor};
    margin: 0 0 0 20px;
  }
`;
