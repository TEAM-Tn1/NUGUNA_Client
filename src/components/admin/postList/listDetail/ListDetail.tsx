import { FC, useEffect, useState } from 'react';
import { positive, negative } from '../../../../assets/admin';
import * as S from './style/index';

interface detailProps {
  description: string;
  photo_url: string;
  option: number;
}

const ListDetail: FC<detailProps> = ({ description, photo_url, option }) => {
  const [whether, setWhether] = useState<boolean>(true);

  const [displayOpcity, setDisplayOpcity] = useState<number>(1);
  const [displayCilck, setDisplayCilck] = useState<any>('auto');

  const [named, setNamed] = useState<string>('');
  const [dateDisplay, setDateDisplay] = useState<string>('');
  const [divDisplay, setDivDisplay] = useState<string>('');

  useEffect(() => {
    switch (option) {
      case 1:
        setNamed('유저 비활성화 여부');
        setDateDisplay('block');
        setDivDisplay('flex');
        break;
      case 2:
        setNamed('게시물 비활성화 여부');
        setDateDisplay('none');
        setDivDisplay('flex');
        break;
      case 3:
        setNamed('');
        setDateDisplay('none');
        setDivDisplay('none');
        break;
    }
  }, []);

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
        <div style={{ display: divDisplay }}>
          <p>{named}</p>
          <img
            src={whether ? positive : negative}
            onClick={() => setWhether(!whether)}
            style={{ display: divDisplay }}
          />
          <input
            type='date'
            style={{ opacity: displayOpcity, pointerEvents: displayCilck, display: dateDisplay }}
          />
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
