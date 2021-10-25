import React, { FC, useEffect, useState } from 'react';
import { positive, negative } from '../../../../assets/admin';
import * as S from './style/index';

interface detailProps {
  description: string;
  photo_url: string;
  option: number;
  styles: boolean;
}

const ListDetail: FC<detailProps> = ({ description, photo_url, option, styles }) => {
  const [whether, setWhether] = useState<boolean>(true);

  const [displayOpcity, setDisplayOpcity] = useState<number>(1);
  const [displayCilck, setDisplayCilck] = useState<any>('auto');

  const [divDisplay, setDivDisplay] = useState<string>('');

  const [named, setNamed] = useState<string>('');
  const [dateDisplay, setDateDisplay] = useState<string>('');
  const [divDisplayAnswer, setDivDisplayAnswer] = useState<string>('');

  useEffect(() => {
    switch (option) {
      case 1:
        setNamed('유저 비활성화 여부');
        setDateDisplay('block');
        setDivDisplayAnswer('flex');
        break;
      case 2:
        setNamed('게시물 비활성화 여부');
        setDateDisplay('none');
        setDivDisplayAnswer('flex');
        break;
      case 3:
        setNamed('');
        setDateDisplay('none');
        setDivDisplayAnswer('none');
        break;
    }
  }, []);

  useEffect(() => {
    whether ? setDisplayOpcity(1) : setDisplayOpcity(0.3);
    whether ? setDisplayCilck('auto') : setDisplayCilck('none');
  }, [whether]);

  return (
    <S.Detail style={{ display: styles ? 'block' : 'none' }}>
      <S.Content>
        <span>내용</span>
        <div>
          <p>{description}</p>
          <img src={photo_url} />
        </div>
      </S.Content>
      <hr />
      <S.Answer>
        <div style={{ display: divDisplayAnswer }}>
          <p>{named}</p>
          <img
            src={whether ? positive : negative}
            onClick={() => setWhether(!whether)}
            style={{ display: divDisplayAnswer }}
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
