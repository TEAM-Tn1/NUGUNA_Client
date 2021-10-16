import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const DetailChat = styled.div`
  max-width: 500px;
  height: calc(100vh - 147px);
  margin: 0 auto;
  margin-top: 87px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 87px;
  position: fixed;
  top: calc(constant(safe-area-inset-top) + 0px);
  top: calc(env(safe-area-inset-top) + 0px);
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  border-bottom: 2px solid #c4c4c4;
  padding-top: 20px;
  gap: 5px;
  > img {
    width: 16px;
    height: 16px;
  }
  > p {
    width: 82%;
    font-size: 20px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  > span {
    font-size: 20px;
    font-weight: bold;
    color: #754f44;
    margin-left: 5px;
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  overflow-y: auto;
  position: relative;
`;

export const FooterBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: calc(constant(safe-area-inset-bottom) + 0px);
  bottom: calc(env(safe-area-inset-bottom) + 0px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 500px;
  background-color: ${color.mainColor};
  > img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export const ChatInput = styled.input`
  width: 73%;
  height: 35px;
  border-radius: 10px;
  padding: 0px 15px;
  border: none;
  background-color: #f3f3f3;
  font-size: 12px;
`;

export const SettingLine = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 6px;
  > div {
    width: 29%;
    min-width: 105px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f3f3;
    border-radius: 10px;
    gap: 5px;
    cursor: pointer;
    > img {
      width: 17px;
      height: 17px;
    }
    > p {
      font-size: 10px;
    }
  }
`;
