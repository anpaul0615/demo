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
    setTimeout(function(){
      console.log(this===window); // true
      console.log(this.count); // undefined
      console.log(this.plus); // undefined
    },1000);
  }
};

let mySports = new Sports();
mySports.get();
