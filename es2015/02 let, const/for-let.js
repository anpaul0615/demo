"use strict";
debugger;

let companies = ['daun', 'kakao', 'nus'];

for (let i=0; i<companies.length; i++) { // for문 블럭스코프에 변수 바인딩
  setTimeout(function() {
    console.log(i, companies[i]); // for문 블럭스코프에서 i 를 찾음
  }, i * 1000);
};
