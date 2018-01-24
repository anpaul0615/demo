"use strict";
debugger;

let companies = ['daun', 'kakao', 'nus'];

for (var i=0; i<companies.length; i++) { // for문을 호출한 함수스코프에 변수 바인딩
  setTimeout(function() {
    console.log(i, companies[i]); // for문을 호출한 함수스코프에서 i 를 찾음
  }, i * 1000);
};

/*
 * # 호이스팅과 함수스코프 적용으로인한 var 변수 버그
 *  (참조 : http://hacks.mozilla.or.kr/2016/03/es6-in-depth-let-and-const/)
 *
 * ## 요약
 *  1. for(var i ..) 에서 선언된 var 변수는 호이스팅으로 인하여
       호출함수의 맨앞으로 끌어올려져서 변수선언 + undefined 자동할당됨.
 *  2. for 문이 실행되면, var 변수는 호출함수의 지역변수로 취급됨.
 *  3. for 문이 반복할때마다, var 변수는 호출함수의 지역변수를 덮어씀.
 *  4. 반복이 종료되고 타임아웃함수가 실행됨.
 *  5. 타임아웃함수는 호출함수의 지역변수를 참조함.
 *  6. 이 시점에서의 지역변수는 가장 마지막에 덮어쓴 값임.
 *
 */
