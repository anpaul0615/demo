"use strict";
debugger;

let sports = "축구";

if(sports){
  let sports = "농구";
  console.log("블록: ", sports);

  if(sports){
      let sports = "배구";
      console.log("블록2: ", sports);
  }
};

console.log("글로벌: ", sports);
