import { modify, like, written, suggestion } from '../../assets/profile';
export const PROFILE_ELEMENT = [
  { id: 'modify', text: '내 정보 수정하기', img: modify, path: '/modify' },
  { id: 'like', text: '좋아요 표시한 게시물 보기', img: like, path: '/like_post' },
  { id: 'written', text: '작성한 게시물 보기', img: written, path: '/written_post' },
  { id: 'suggestion', text: '문의사항 작성하기', img: suggestion, path: '/suggestion' },
];
