"use strict";
debugger;

const COMPANY = {
  name: 'daun',
  addr: 'busan',
  employeeCount: 24
};
console.log(COMPANY);  // 참조형 상수역시 선언과 함께 초기화


COMPANY.employeeCount += 1;
console.log(COMPANY);  // 하지만 참조값의 멤버는 변경 가능


COMPANY = {
  name: 'kakao',
  addr: 'jeju'
};  // error!
console.log(COMPANY);  // error, 참조값 자체를 재할당할수는 없음
