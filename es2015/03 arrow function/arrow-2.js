"use strict";
debugger;

// es5 function
var es5 = function(one, two){
  return one + two;
};
var es5_result = es5(1,2);
console.log(es5_result);


// es6 function
let es6 = (one, two) =>{
  return one + two;
};
let es6_result = es6(1,2);
console.log('es6_result : ', es6_result);

// es6 function 2 (one line)
let es6_2 = (one, two) => { return one + two; };
let es6_result_2 = es6_2(1,2);
console.log('es6_result_2 : ', es6_result_2);

// es6 function 3 (short return)
let es6_3 = value => value + 10;
let es6_result_3 = es6_3(1);
console.log('es6_result_3 : ', es6_result_3);

// es6 function 4 (no param)
let es6_4 = () => 3+4;
let es6_result_4 = es6_4();
console.log('es6_result_4 : ', es6_result_4);

// es6 function 5 (short object return)
let es6_5 = param => ({sports: '축구'});
let es6_result_5 = es6_5();
console.log('es6_result_5 : ', es6_result_5);
