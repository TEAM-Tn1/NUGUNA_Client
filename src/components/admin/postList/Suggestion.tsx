import { FC } from 'react';
import Frame from './frame/index';
import { suggestionIcon } from '../../../assets/defalut';

const Data = {
  "listId": "report_id",
	"title": "title",
	"reporter_name": "",
	"defendant_name": "defendant_name",
	"created_date": "2021-10-05",
	"check": true
}

const Suggestion: FC = () => {
  return (
    <Frame
      listTitle='문의사항'
      imgSrc={suggestionIcon}
      listTarget={''}
      listWriter='게시자'
      listDate='게시일'
      divType='none'
      postOp=''
      userOp=''
      Data={Data}
    />
  );
};

export default Suggestion;
