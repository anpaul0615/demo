"use strict";
debugger;

// arrow function : this
let Sports = function(){
  this.count = 20;
};
Sports.prototype = {
  plus: function(){
    this.count += 1;
  },
  get: function(){
    setTimeout(() => { // arrow function
      console.log(this===window); // false
      console.log(this.count); // 20
      console.log(this.plus); // function()
    },1000);
  }
};

let mySports = new Sports();
mySports.get();
