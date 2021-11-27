import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';
import { exit_icon } from '../../assets/alarm/index';
import { List } from './list/index';
import listGet from '../../util/api/notificate';
import { useInView } from 'react-intersection-observer';
import { useHistory } from 'react-router';

const Noti = () => {
  const accessToken = localStorage.getItem('access_token');
  const history = useHistory();

  const [list, setList] = useState<Array<any>>([]);
  const [lastCheck, setLastCheck] = useState<boolean>();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const getList = useCallback(async () => {
    setLoading(true);
    await listGet
      .setListGet(accessToken, page)
      .then(res => {
        if (res.data.length === 0) {
          setLastCheck(true);
        }
        setList(prevState => [...prevState, ...res.data]);
      })
      .catch(err => {
        history.push('/auth');
        alert('로그인을 해주세요.');
        throw err;
      });
    setLoading(false);
  }, [page]);

  useEffect(() => {
    getList();
  }, [page]);

  useEffect(() => {
    if (inView && !loading && !lastCheck) {
      setPage(prevState => prevState + 1);
    }
  }, [inView, loading]);

  return (
    <S.Wrapper>
      <S.AlarmHeader>
        <div>
          <img src={exit_icon} alt='' />
        </div>
        <h2>알람</h2>
        <div>태그등록</div>
      </S.AlarmHeader>
      {list.map((listItem: any, idx: number) => {
        return list.length - 1 == idx ? (
          <List
            notification_id={listItem.notification_id}
            title={listItem.title}
            message={listItem.message}
            content={listItem.content}
            watch={listItem.watch}
            ref={ref}
          />
        ) : (
          <List
            notification_id={listItem.notification_id}
            title={listItem.title}
            message={listItem.message}
            content={listItem.content}
            watch={listItem.watch}
          />
        );
      })}
    </S.Wrapper>
  );
};

export default Noti;
