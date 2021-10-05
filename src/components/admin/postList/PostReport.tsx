import { FC } from 'react';
import Frame from './frame/index';
import { reportIcon } from '../../../assets/defalut';

const Data = {
  "listId": "report_id",
	"title": "title",
	"reporter_name": "",
	"defendant_name": "defendant_name",
	"created_date": "2021-10-05",
	"check": true
}

const PostReport: FC = () => {
  return (
    <Frame
      listTitle='신고사항'
      imgSrc={reportIcon}
      listTarget={''}
      listWriter='신고자'
      listDate='신고일'
      divType='flex'
      postOp='1'
      userOp='0.5'
      Data={Data}
    />
  );
};

export default PostReport;
