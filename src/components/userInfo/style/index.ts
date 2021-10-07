import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const UserInfoBox = styled.div`
  padding: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StudentInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

export const ReportButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 20px;
    height: 20px;
  }

  & span {
    color: #754f44;
    font-size: 10px;
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

  & span:nth-child(2) {
    font-size: 14px;
  }
`;

export const AccountInfo = styled(DormitoryInfo)``;

export const WrittenPostBox = styled.div`
  & > span {
    padding-left: 30px;
    font-size: 18px;
    font-weight: bold;
  }
`;
