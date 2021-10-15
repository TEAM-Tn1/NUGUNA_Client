import styled from 'styled-components';
import { color } from '../../../style/index';

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

