import React from 'react';
import * as S from './style';
import { EXPLAINPOSTTEXTAREA, EXPLAINPOSTTITLE } from '../../constance/writePost';

const ExplainPost = () => {
  return (
    <S.ExplainPostContent>
      <S.SubTitle>
        {EXPLAINPOSTTITLE}
        <span>*</span>
      </S.SubTitle>
      <S.ExplainPostTextarea placeholder={EXPLAINPOSTTEXTAREA} />
    </S.ExplainPostContent>
  );
};

export default ExplainPost;
