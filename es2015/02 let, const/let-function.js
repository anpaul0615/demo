"use strict";
debugger;

let music = "재즈";
let sports = "축구";

function get(){
  let music = "클래식";
  console.log("함수블록: ", music);  // 함수블록의 music 출력
  console.log("함수블록: ", sports);  // 함수블록의 sports 를 찾지못함, 프로토타입체인으로 함수를 호출한 오브젝트의 sports 를 출력
};

get();

console.log("글로벌: ", music);  // 글로벌 music 출력
console.log("글로벌: ", sports);  // 글로벌 sports 출력
