import { FC, useEffect, useState } from 'react';
import { positive, negative } from '../../../../assets/admin';
import * as S from './style/index';

interface detailProps {
  description: string;
  photo_url: string;
}

const ListDetail: FC<detailProps> = ({ description, photo_url }) => {
  const [whether, setWhether] = useState<boolean>(true);

  const [displayOpcity, setDisplayOpcity] = useState<number>(1);
  const [displayCilck, setDisplayCilck] = useState<any>('auto');

  useEffect(() => {
    whether ? setDisplayOpcity(1) : setDisplayOpcity(0.3);
    whether ? setDisplayCilck('auto') : setDisplayCilck('none');
  }, [whether]);

  return (
    <S.Detail>
      <S.Content>
        <span>내용</span>
        <div>
          <p>{description}</p>
          <img src={photo_url} />
        </div>
      </S.Content>
      <hr />
      <S.Answer>
        <div>
          <p>유저 비활성화 여부</p>
          <img src={whether ? positive : negative} onClick={() => setWhether(!whether)} />
          <input type='date' style={{ opacity: displayOpcity, pointerEvents: displayCilck }} />
        </div>
        <textarea placeholder='답변을 남겨주세요.' />
        <div>
          <button>확인</button>
        </div>
      </S.Answer>
    </S.Detail>
  );
};

export default ListDetail;
