import styled from 'styled-components';
import { color } from '../../../../style/index';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 157, 134, 0.2);
  width: 400px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
  & img {
    width: 150px;
    height: 150px;
  }

  & p {
    font-family: 'BMJUA';
    font-size: 46px;
    color: #ffffff;
    -webkit-text-stroke: 1.5px #000;
    font-weight: normal;
  }

  & span {
    font-family: 'BMJUA';
    color: ${color.mainColor};
    -webkit-text-stroke: 1.5px #000;
  }
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
  & a:last-child{
    border-bottom: solid 1px ${color.subColor};
  }

  & p {
    font-size: 28px;
    font-weight: bold;
    color: ${color.subColor};
    margin: 0 0 0 20px;
  }
`;
