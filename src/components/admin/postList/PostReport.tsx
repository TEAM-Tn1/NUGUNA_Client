import { FC } from 'react';
import Frame from './frame/index';
import { reportIcon } from '../../../assets/defalut';

const PostReport: FC = () => {
  return (
    <Frame
      title='신고사항'
      imgSrc={reportIcon}
      target={''}
      writer='신고자'
      date='신고일'
      divType='flex'
      postOp='1'
      userOp='0.5'
    />
  );
};

export default PostReport;
