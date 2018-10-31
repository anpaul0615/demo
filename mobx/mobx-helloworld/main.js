const { observable, reaction, computed, autorun } = require('mobx');

// **** Observable State
const calculator = observable({
  a: 'hello',
  b: 'world'
});

// **** Event Action
// autorun(() => {
//   console.log(`a is changed!! : ${calculator.a}`);
// });
// autorun(() => {
//   console.log(`b is changed!! : ${calculator.b}`);
// });
reaction(
  () => calculator.a,
  (value, reaction) => {
    console.log(`a is changed!! : ${value}`);
  }
);
reaction(
  () => calculator.b,
  value => {
    console.log(`b is changed!! : ${value}`);
  }
);

// Invoke Event!!
calculator.a = '111';
calculator.b = '222';

// **** Computed 
const sum = computed(() => {
  console.log('now computing..!');
  return calculator.a + calculator.b;
});
sum.observe(() => calculator.a);
sum.observe(() => calculator.b);

// Invoke Event!!
console.log('//', sum.value);
calculator.a = '333';
calculator.b = '444';
console.log(sum.value, '//');

// Invoke Event Again!!
console.log('//', sum.value);
calculator.a = 'byebye';
console.log(sum.value, '//');
