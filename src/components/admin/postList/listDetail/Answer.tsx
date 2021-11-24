import React, { FC, useEffect, useState } from 'react';
import { positive, negative } from '../../../../assets/admin';
import * as S from './style/index';
import questionAnswer from '../../../../util/api/admin/answer';
import reportPostAnswer from '../../../../util/api/admin/answer';
import reportUserAnswer from '../../../../util/api/admin/answer';
import { useHistory } from 'react-router';

interface detailProps {
  close: (e: any) => void;
  id: number | string;
  named: string;
  dateDisplay: string;
  divDisplayAnswer: string;
  option: number | string;
}

const Answer = ({ close, id, named, dateDisplay, divDisplayAnswer, option }: detailProps) => {
  const [whether, setWhether] = useState<boolean>(true);
  const [displayOpcity, setDisplayOpcity] = useState<number>(1);
  const [displayCilck, setDisplayCilck] = useState<any>('auto');
  const [reason, setReason] = useState<string>('');
  const [date, setDate] = useState<string | undefined>();
  const history = useHistory();

  const accessToken = localStorage.getItem('access_token');

  const onSubmit = (option: number | string) => {
    if (reason.replace(/ /g, '') == '') {
      alert('답변을 적어주세요');
    } else {
      switch (option) {
        case 1:
          if (whether) {
            if (date == undefined) {
              alert('정지할 날짜까지 선택하세요.');
            } else {
              console.log(whether);
              console.log(reason);
              console.log(date);
              reportUserAnswer
                .setReportUserAnswer(accessToken, id, reason, date)
                .then(res => {
                  console.log(res);
                  history.go(0);
                })
                .catch(err => {
                  console.log(err);
                });
              alert('성공');
              close(false);
            }
          } else {
            console.log(whether);
            console.log(reason);
            console.log(date);
            reportUserAnswer
              .setReportUserAnswer(accessToken, id, reason, date)
              .then(res => {
                console.log(res);
                history.go(0);
              })
              .catch(err => {
                console.log(err);
              });
            alert('성공');
            close(false);
          }
          /*    */
          break;
        case 2:
          reportPostAnswer
            .setReportPostAnswer(accessToken, id, reason, whether)
            .then(res => {
              console.log(res);
              history.go(0);
            })
            .catch(err => {
              console.log(err);
            });
          close(false);
          break;
        case 3:
          questionAnswer
            .setQuestionAnswer(accessToken, id, reason)
            .then(res => {
              console.log(res);
              history.go(0);
            })
            .catch(err => {
              console.log(err);
            });
          close(false);
          break;
      }
    }
  };

  useEffect(() => {
    whether ? setDisplayOpcity(1) : setDisplayOpcity(0.3);
    whether ? setDisplayCilck('auto') : setDisplayCilck('none');
  }, [whether]);

  const today = new Date().toISOString().substring(0, 10);

  return (
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
          min={today}
          style={{ opacity: displayOpcity, pointerEvents: displayCilck, display: dateDisplay }}
          onChange={e => setDate(e.target.value)}
        />
      </div>
      <textarea
        placeholder='답변을 남겨주세요.'
        value={reason}
        onChange={e => {
          setReason(e.target.value);
        }}
      />
      <div>
        <button onClick={() => onSubmit(option)}>확인</button>
      </div>
    </S.Answer>
  );
};

export default Answer;
