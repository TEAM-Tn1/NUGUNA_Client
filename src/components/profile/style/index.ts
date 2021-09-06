import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

export const UserInfoBox = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StudentInfo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  font-weight: bold;

  & span:first-child {
    font-size: 32px;
  }

  & span:last-child {
    font-size: 18px;
  }
`;

export const DormitoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & span:first-child {
    font-size: 12px;
    font-weight: bold;
  }

  & span:last-child {
    font-size: 14px;
  }
`;

export const AccountInfo = styled(DormitoryInfo)``;

export const DetailPage = styled(Link)`
  height: 60px;
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 0px 30px;
  border-top: 1px solid #ff9d86;

  & span {
    color: black;
    font-size: 18px;
  }
`;

export const Logout = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 0px 30px;
  border-top: 1px solid #ff9d86;
  border-bottom: 1px solid #ff9d86;

  & span {
    color: black;
    font-size: 18px;
  }
`;
