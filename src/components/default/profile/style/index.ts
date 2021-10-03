import styled, { keyframes } from 'styled-components';

interface Props {
  top: string;
  isShow: boolean;
}

export const moveUp = (top: string) => keyframes`
  from {
    top: ${top};
  }
  to {
    top: 100px;
  }
`;

export const moveDown = (top: string) => keyframes`
  from {
    top: 100px;
  }
  to {
    top: ${top};
  }
`;

export const Wrapper = styled.div<Props>`
  max-width: 500px;
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 0px 30px;
  border-top: 1px solid #ff9d86;
  border-bottom: 1px solid #ff9d86;
  cursor: pointer;
  top: ${props => props.top};
  animation: ${props => (props.isShow ? moveUp(props.top) : moveDown(props.top))} 0.75s;
  animation-fill-mode: forwards;

  & p {
    font-size: 18px;
  }
`;
