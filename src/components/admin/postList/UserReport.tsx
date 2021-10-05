import { FC, useEffect } from 'react';
import Frame from './frame/index';
import { reportIcon } from '../../../assets/defalut';
import axios from 'axios';

const Data = {
  listId: '335',
  title: '유저신고사항유저신고사항유저신고사항유저신고사항유저신고사항',
  reporter_name: '김박박',
  defendant_name: '박김김',
  created_date: '10/05',
  check: true,
};

const UserReport: FC = () => {
  return (
    <Frame
      listTitle='신고사항'
      imgSrc={reportIcon}
      listTarget='대상자'
      listWriter='신고자'
      listDate='신고일'
      divType='flex'
      postOp='0.5'
      userOp='1'
      Data={Data}
    />
  );
};

export default UserReport;
