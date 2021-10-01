import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const Post = styled.div`
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
  position: relative;
`;

export const TitleLine = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 20px;
  > p:first-child {
    height: 30px;
    font-size: 23px;
    color: black;
  }
  > p:nth-child(2) {
    margin: 0px 2.7%;
  }
  > p:nth-child(3) {
    margin-right: 30%;
  }
  > p:nth-child(4) {
    margin-right: 5.4%;
  }
`;

export const SubTitle = styled.p<{
  isClick?: boolean;
}>`
  font-size: 11px;
  cursor: pointer;
  ${({ isClick }) => css`
    color: ${isClick ? 'black' : color.disabled};
  `}
`;

export const PostContent = styled.div`
  width: 331px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  margin: 0 auto;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

export const PostImg = styled.div`
  width: 130px;
  height: 130px;
  background-color: ${color.mainColor};
`;

export const PostInfo = styled.div`
  width: 177px;
`;

export const PostTitle = styled.p`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 16px;
`;

export const PayAndLike = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    font-size: 12px;
    margin: 0px 25px 0px 8px;
  }
`;

export const DateAndPeople = styled(PayAndLike)`
  margin-top: 10px;
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const HashtagLine = styled.div`
  display: flex;
  gap: 4px;
`;

export const Hashtag = styled.div`
  width: 39px;
  height: 19px;
  border-radius: 10px;
  background-color: ${color.mainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
  > p {
    color: white;
    font-size: 11px;
  }
`;

export const PostList = styled.div`
  height: 580px;
  overflow: auto;
`;

export const WriteBtn = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 31px;
  right: 15px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const WriteIcon = styled.img`
  width: 21px;
  height: 21px;
`;
