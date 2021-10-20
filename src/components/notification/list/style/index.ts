import styled from 'styled-components';

export const List = styled.div`
  margin: 0 30px;
  display: flex;
  gap: 10px;

  > div:first-child {
    padding-top: 2px;
  }

  & span {
    font-size: 14px;
    color: #6c6c6c;
  }

  & p {
    font-size: 16px;
    color: #000000;
  }
`;
