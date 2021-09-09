import styled, { keyframes } from 'styled-components';

export const moveUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-220px);
  }
`;

export const Wrapper = styled.div`
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
  animation: ${moveUp} 1.25s;
  animation-fill-mode: forwards;

  & p {
    font-size: 18px;
  }
`;
