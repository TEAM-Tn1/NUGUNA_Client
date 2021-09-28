import { FC } from 'react';
import Frame from './frame/index';
import { reportIcon } from '../../assets/defalut';

const UserReport: FC = () => {
  return (
    <Frame
      title='신고사항'
      imgSrc={reportIcon}
      target={'대상자'}
      writer='신고자'
      date='신고일'
      divType='flex'
      postOp='0.5'
      userOp='1'
    />
  );
};

export default UserReport;
