import styled, { keyframes } from 'styled-components';

interface Props {
  isGroup: boolean;
}

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  position: relative;
  top: 160px;
  opacity: 0;
  animation: ${fadeIn} 0.25s ease 0.75s;
  animation-fill-mode: forwards;
`;

export const TypeSelector = styled.div<Props>`
  display: flex;
  gap: 10px;
  padding: 10px 30px;

  & > p {
    font-size: 11px;
    cursor: pointer;
  }

  & > p:first-child {
    opacity: ${props => (props.isGroup ? '0.5' : '1')};
  }

  & > p:last-child {
    opacity: ${props => (props.isGroup ? '1' : '0.5')};
  }
`;
