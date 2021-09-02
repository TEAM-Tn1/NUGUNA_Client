import { createGlobalStyle } from 'styled-components';

const global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

@font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
}

* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;
    user-select:none;
  }
  a {
    text-decoration: none;
  }
  body {
    margin: 0;
  }
  
`;

export default global;
