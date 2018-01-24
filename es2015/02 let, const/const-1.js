"use strict";
debugger;

const GLOBAL_VALUE = 3000;  // 원시형 상수변수는 선언과 함께 초기화 + 값변경금지
console.log(GLOBAL_VALUE);

const GLOBAL_VALUE2;  // SyntaxError
console.log(GLOBAL_VALUE2);

GLOBAL_VALUE = 5000;  // SyntaxError
console.log(GLOBAL_VALUE);

GLOBAL_VALUE++;      // nice try, but still a SyntaxError
console.log(GLOBAL_VALUE);
