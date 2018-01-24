"use strict";
debugger;

const COMPANIES = ['daun', 'kakao', 'nus'];  // 참조형 상수역시 선언과 함께 초기화
console.log(COMPANIES);

COMPANIES.push('google');  // 하지만 참조값의 멤버는 변경 가능
console.log(COMPANIES);
COMPANIES.pop();
console.log(COMPANIES);

COMPANIES = ['naver', 'line', 'facebook'];  // error!, 참조값 자체를 재할당할수는 없음
console.log(COMPANIES);
