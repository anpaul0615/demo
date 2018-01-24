"use strict";
debugger;

var sports = "축구";

if(sports){
  var sports = "농구";
  console.log("블록: ", sports);  // 농구, 글로벌스코프(window)에 덮어쓰기 1

  if(sports){
      var sports = "배구";
      console.log("블록2: ", sports);  // 배구, 글로벌스코프(window)에 덮어쓰기 2
  }
};

console.log("글로벌: ", sports);  // 배구, 글로벌스코프(window)에 덮어쓰기 3
