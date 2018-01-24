"use strict";
debugger;

console.log(this);  // this는 글로벌인스턴스(window)

var music = "음악";  // var변수는 글로벌영역에 위치
console.log(this.music);  // "음악"
console.log(music);

let sports = "축구";  // let변수는
console.log(this.sports);   // 글로벌영역
console.log(sports);
