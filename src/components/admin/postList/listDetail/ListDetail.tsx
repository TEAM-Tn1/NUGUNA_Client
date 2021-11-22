import React, { FC, useEffect, useState } from 'react';
import { positive, negative } from '../../../../assets/admin';
import * as S from './style/index';
import question from '../../../../util/api/admin/listDescription';
import reportPost from '../../../../util/api/admin/listDescription';
import reportUser from '../../../../util/api/admin/listDescription';

interface detailProps {
  closeDetail: () => void;
  option: number;
  styles: boolean;
  id: number | string;
}

const ListDetail = ({ closeDetail, option, styles, id }: detailProps) => {
  const [whether, setWhether] = useState<boolean>(true);
  const [displayOpcity, setDisplayOpcity] = useState<number>(1);
  const [displayCilck, setDisplayCilck] = useState<any>('auto');
  const [named, setNamed] = useState<string>('');
  const [dateDisplay, setDateDisplay] = useState<string>('');
  const [divDisplayAnswer, setDivDisplayAnswer] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [photoUrl, setPhotoUrl] = useState<string>('');

  const accessToken = localStorage.getItem('access_token');

  useEffect(() => {
    switch (option) {
      case 1:
        setNamed('유저 비활성화 여부');
        setDateDisplay('block');
        setDivDisplayAnswer('flex');
        reportUser
          .setReportUser(id, accessToken)
          .then(res => {
            setDescription(res.data.description);
            setPhotoUrl(res.data.photo_url);
          })
          .catch(err => {
            console.log(err);
          });
        break;
      case 2:
        setNamed('게시물 비활성화 여부');
        setDateDisplay('none');
        setDivDisplayAnswer('flex');
        reportPost
          .setReportPost(id, accessToken)
          .then(res => {
            setDescription(res.data.description);
            setPhotoUrl(res.data.photo_url);
          })
          .catch(err => {
            console.log(err);
          });
        break;
      case 3:
        setNamed('');
        setDateDisplay('none');
        setDivDisplayAnswer('none');
        question
          .setQuestion(id, accessToken)
          .then(res => {
            setDescription(res.data.description);
          })
          .catch(err => {
            console.log(err);
          });
        break;
    }
  }, []);

  useEffect(() => {
    whether ? setDisplayOpcity(1) : setDisplayOpcity(0.3);
    whether ? setDisplayCilck('auto') : setDisplayCilck('none');
  }, [whether]);

  useEffect(() => {}, []);

  return (
    <S.Detail style={{ display: styles ? 'block' : 'none' }}>
      <S.Content>
        <span>내용</span>
        <div>
          <p>{description}</p>
          <img src={photoUrl} alt='' />
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
            alt=''
          />
          <input
            type='date'
            style={{ opacity: displayOpcity, pointerEvents: displayCilck, display: dateDisplay }}
          />
        </div>
        <textarea placeholder='답변을 남겨주세요.' />
        <div>
          <button onClick={closeDetail}>확인</button>
        </div>
      </S.Answer>
    </S.Detail>
  );
};

export default ListDetail;
