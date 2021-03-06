import React, { useCallback, useEffect, useState } from 'react';
import { reportIcon } from '../../assets/detailPost';
import ModalTemplate from '../default/modal/modalTemplate';
import { Header, Footer } from '../index';
import * as S from './style';
import userInfo from '../../util/api/userInfo';
import mypage from '../../util/api/mypage';
import { useInView } from 'react-intersection-observer';
import PostContent from '../post/PostContent';

const UserInfo = ({ match }: any) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [userInfos, setUserInfos] = useState({
    name: '',
    gcn: '',
    email: '',
    room_number: '',
    account_number: '',
  });
  const { name, gcn, email, room_number, account_number } = userInfos;
  const { getUserInfo } = userInfo;
  const { getUserPost } = mypage;

  const [postType, setPostType] = useState('trade');
  const [list, setList] = useState<Array<any>>([]);
  const [lastCheck, setLastCheck] = useState<boolean>();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const getList = useCallback(async () => {
    setLoading(true);
    setLastCheck(false);
    await getUserPost(match.params.email, page, postType)
      .then(res => {
        if (res.data.length === 0) {
          setLastCheck(true);
        }
        setList(prevState => [...prevState, ...res.data]);
      })
      .catch(err => {
        throw err;
      });
    setLoading(false);
  }, [page, postType]);

  useEffect(() => {
    getList();
  }, [page, postType]);

  useEffect(() => {
    setList([]);
    setPage(0);
    window.scrollTo({
      top: 0,
    });
  }, [postType]);

  useEffect(() => {
    if (inView && !loading && !lastCheck) {
      setPage(prevState => prevState + 1);
    }
  }, [inView, loading]);

  const setCarrot = () => {
    setPostType('trade');
  };

  const setGroup = () => {
    setPostType('group');
  };

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  useEffect(() => {
    getUserInfo(match.params.email)
      .then(res => {
        const { name, gcn, email, room_number, account_number } = res.data;
        setUserInfos({
          name,
          gcn,
          email,
          room_number,
          account_number,
        });
      })
      .catch(err => {
        if (err.response.status === 401) {
          alert('????????? ??? ?????? ???????????????.');
          window.location.href = 'auth';
        }
        throw err;
      });
  }, []);

  return (
    <S.Wrapper>
      <Header />
      <S.UserInfoBox>
        <S.StudentInfoBox>
          <S.StudentInfo>
            <span>{name || '???????????? ?????? ???????????????'}</span>
            <span>{gcn}</span>
          </S.StudentInfo>
          {name && (
            <S.ReportButton onClick={openModal}>
              <img src={reportIcon} alt='' />
              <span>????????????</span>
            </S.ReportButton>
          )}
        </S.StudentInfoBox>
        <S.DormitoryInfo>
          <span>{name && '??????'}</span>
          <span>{`${room_number}???`}</span>
        </S.DormitoryInfo>
        <S.AccountInfo>
          <span>{name && '????????????'}</span>
          <span>{account_number || '??????????????? ???????????? ?????? ???????????????.'}</span>
        </S.AccountInfo>
      </S.UserInfoBox>
      <S.WrittenPostBox>
        <span>{name && '????????? ?????????'}</span>
        <S.ListWrapper>
          <S.TypeSelector postType={postType}>
            <p onClick={setCarrot}>??????</p>
            <p onClick={setGroup}>??????</p>
          </S.TypeSelector>
          {list.map(ele => {
            const month = ele.date && ele.date.slice(5, 7);
            const date = ele.date && ele.date.slice(8);
            const dates = `${month}/${date}`;
            const showPeople = `${ele.current_head_count}/${ele.head_count}`;
            return (
              <PostContent
                key={ele.feed_id}
                feedId={ele.feed_id}
                medium={ele.medium}
                title={ele.title}
                money={ele.price}
                like={ele.count}
                type={postType}
                date={dates}
                people={showPeople}
                hashtag={ele.tags}
                isLikeClick={ele.like}
              />
            );
          })}
          {!loading && <p ref={ref}>?????? ???...</p>}
        </S.ListWrapper>
      </S.WrittenPostBox>

      <Footer />
      <ModalTemplate
        subject='????????????'
        isShowModal={isShowModal}
        closeModal={closeModal}
        id={email}
      />
    </S.Wrapper>
  );
};

export default UserInfo;
