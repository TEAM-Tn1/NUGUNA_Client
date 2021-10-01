import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const DetailPost = styled.div`
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
`;

export const ContentBox = styled.div`
  width: 100%;
  min-width: 375px;
  max-width: 500px;
  height: 760px;
  padding-top: 124px;
`;

export const TopLine = styled.div`
  width: 86%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  > div {
    display: flex;
    align-items: center;
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-right: 10px;
`;

export const PrevComment = styled.p`
  font-size: 16px;
`;

export const DetailContent = styled.div`
  width: 100%;
`;

export const TitleLine = styled.div`
  width: 86%;
  height: 54px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
`;

export const PostTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  width: 260px;
`;

export const Report = styled.div`
  width: 40px;
  > p {
    font-size: 10px;
    color: #754f44;
    text-align: center;
    margin-top: 3px;
  }
`;

export const ReportIcon = styled.img`
  width: 20px;
  height: 20px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

export const HashTageLine = styled.div`
  width: 86%;
  display: flex;
  gap: 4px;
  overflow: hidden;
  margin: 0 auto;
`;

export const HashTag = styled.div`
  height: 23px;
  border-radius: 24px;
  background-color: ${color.mainColor};
  color: white;
  padding: 0px 8px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
