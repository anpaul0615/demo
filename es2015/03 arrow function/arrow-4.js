"use strict";
debugger;

// es5 function : arguments
var es5_args = function(){
  try{
    var args = arguments;
    console.log(args);
  }catch(e){
    console.log(e);
  }
};
es5_args(1,2,3);


// es6 arrow function : arguments
let es6_args = () => {
  try{
    let args = arguments;  // error
    console.log(args);
  }catch(e){
    console.log(e);
  }
};
es6_args(1,2,3);

// es6 arrow function : rest
let es6_rest = (...rest) => {
  try{
    let args = rest;
    console.log(args);
  }catch(e){
    console.log(e);
  }
};
es6_rest(1,2,3);
