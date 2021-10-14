import { FC, useEffect, useState } from 'react';
import { positive, negative } from '../../../../assets/admin';
import * as S from './style/index';

interface detailProps {
  description: string;
  photo_url: string;
}

const DetailData = {
  description: '내용내용내용내용내용내용내용',
  photo_url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
};

const { description, photo_url } = DetailData;

const ListDetail = () => {
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
          <img src={positive} />
          <input type='date' />
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
