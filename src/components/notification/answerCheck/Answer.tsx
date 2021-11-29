import React, { useEffect, useState } from 'react';
import * as S from './style';

interface ModalProps {
  isShow: boolean;
  modalTitle: string;
  show: any;
}

const Answer = ({ isShow, modalTitle, show }: ModalProps) => {
  const [title, setTitle] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  useEffect(() => {
    if (modalTitle == '문의') {
      setTitle('문의답변');
    } else if (modalTitle == '신고') {
      setTitle('신고결과');
    }
  }, []);

  if (!isShow) {
    return null;
  }

  return (
    <S.Modal>
      <div>
        <h2>{title}</h2>
        <div>{reason}</div>
        <button onClick={show}>확인</button>
      </div>
    </S.Modal>
  );
};

export default Answer;
