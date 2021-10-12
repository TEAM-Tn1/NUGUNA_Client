import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  max-width: 500px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 65%;
  padding: 30px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  gap: 15px;
  z-index: 2;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 80%;
  padding: 16px;
  border: 1px solid black;

  & input {
    width: 100%;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
  }

  & textarea {
    width: 100%;
    height: calc(100% - 45px);
    font-size: 12px;
    border: none;
    resize: none;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;

  & button {
    width: 50%;
    height: 30px;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #754f44;
  }

  & button:first-child {
    background-color: white;
    color: #754f44;
  }

  & button:nth-child(2) {
    background-color: #754f44;
    color: white;
  }
`;
