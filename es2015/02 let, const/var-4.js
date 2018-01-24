"use strict";
debugger;

// var hoisting
console.log(num); // declare + init (+ auto assign undefined)
var num = 1;      // assign 1
num = 10;         // assign 10
console.log(num); // just use

// function hoisting
console.log(getPi);   // declare + init + assign
console.log(getPi()); // just use
function getPi() {
  return 3.14;
};

// function-expression hoisting
console.log(getPi2);   // only declare
console.log(getPi2()); // error
var getPi2 = function(){
  return 3.14;
};
