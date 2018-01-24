// declare
function func1(){
  console.log('111');
}
function func2(){
  console.log('222');
}
function func3(){
  console.log('333');
}

// test
setTimeout(func1, 1000);
setInterval(func2, 1000);
func3();
