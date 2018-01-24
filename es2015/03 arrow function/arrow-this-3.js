"use strict";
debugger;

// arrow function : this
let Sports = function(){
  this.count = 20;
};
Sports.prototype = {
  plus: () => { // arrow function
    this.count += 1;
  }
};

let mySports = new Sports();
mySports.plus();
console.log(mySports.count); // 20
console.log(window.count);  // NaN, undifined + 1 결과
