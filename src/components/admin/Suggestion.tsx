import { FC } from 'react';
import Frame from './frame/index';
import { suggestionIcon } from '../../assets/defalut';

const Suggestion: FC = () => {
  return (
    <Frame
      title='문의사항'
      imgSrc={suggestionIcon}
      target={''}
      writer='게시자'
      date='게시일'
      divType='none'
      postOp=''
      userOp=''
    />
  );
};

export default Suggestion;
