"use strict";
debugger;

let Person = {
  name: 'Paul An',
  age: 27,
  action: function(){
    console.log('hello!');
  },
  whoami: function(fn){
    fn();
  }
};

console.log(Person.name);

Person.whoami(function(){
  console.log(this);
});
