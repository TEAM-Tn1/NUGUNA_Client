import React, { FC } from 'react';
import * as S from './style';
import { EXPLAINPOSTTEXTAREA, EXPLAINPOSTTITLE } from '../../constance/writePost';

interface Props {
  setDescription: (payload: string) => void;
}

const ExplainPost: FC<Props> = props => {
  const { setDescription } = props;

  const textareaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.currentTarget.value);
  };

  return (
    <S.ExplainPostContent>
      <S.SubTitle>
        {EXPLAINPOSTTITLE}
        <span>*</span>
      </S.SubTitle>
      <S.ExplainPostTextarea placeholder={EXPLAINPOSTTEXTAREA} onChange={textareaChangeHandler} />
    </S.ExplainPostContent>
  );
};

export default ExplainPost;
