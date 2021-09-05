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
