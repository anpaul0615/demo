# ECMAScript 2015

## 03. arrow function

..화살표함수는 함수 이름이 없는 익명 함수입니다. 따라서 함수를 호출하려면 함수표현식과 같이 변수에 할당해야 합니다.

..엔진이 화살표함수를 만나게되면, 빌트인 Function 오브젝트의, prototype 에 연결된 메서드로 오브젝트를 생성하여, es6 변수에 할당합니다.

..화살표 => 앞에서 줄을 분리하면 SyntaxError 가 발생합니다. 화살표 뒤에서 줄을 분리하면 에러가 발생하지 않고 정상으로 실행됩니다.

..호출받는 함수의 파라미터가 하나이면 (value) 형태에서 소괄호를 제외하고 value 만 작성해도 됩니다.

..화살표 => 다음의 {} 를 함수 블록으로 인식하고, 함수블록안에  return 문을 작성하지 않은 것으로 인식하기 때문입니다. 함수에 return 문을 작성하지 않으면 디폴트로 undefined 가 반환됩니다.

..화살표함수에서 {key: value} 형태의 Object 오브젝트를 반환하려면 소괄호 () 안에 {key: value} 형태로 작성합니다. 자바스크립트는 소괄호 안의 코드를 표현식으로 인식합니다. 또한, 표현식을 평가하고 평가결과를 반환합니다.

..화살표함수는 new 연산자로 인스턴스를 생성할 수 없습니다.  
..new 연산자를 사용하려면 get() 함수에 prototype 이 연결되어 있어야 하고, 여기에 constructor 가 연결되어 있어야 합니다.  
..apply() 는 Function 오브젝트의 prototype 에 연결되어 있습니다. 이 형태는 화살표함수가 함수라는 것을 암시합니다. 화살표함수는 함수이지만 특별한 형태의 함수입니다.

..function 키워드로 선언안 함수를 sports(1,2) 형태로 호출하면 함수의 arguments 에 1 과 2 가 설정됩니다. 반면 화살표함수에는 arguments 가 존재하지 않습니다.  
..ES6 에서는 arguments 대신에 rest 파라미터를 사용합니다. rest 파라미터는 "let sprots = (...rest) => {}" 형태와 같이 소괄호 () 안에 점 . 을 세 개 작성하고 이어서 파라미터 이름을 작성합니다. sports(1,2) 로 호출하면 1 과 2 가 rest 파라미터에 배열로 설정됩니다.

..arguments 는 Arguments 오브젝트를 대신하는 프로퍼티로 함수가 호출되면 Arguments 오브젝트를 생성하고 함수실행이 끝나 빠져나올 때 삭제합니다. 함수를 100번 호출하면 100번 Arguments 오브젝트를 생성하고 삭제하므로 효율이 떨어집니다. rest 파라미터는 Arguments 오브젝트를 생성하지 않으므로 효율이 높습니다.

..setTimeout() 이 window 오브젝트 함수이므로 this 가 window 오브젝트를 참조하게 됩니다.   
..여기서 문제는 newSports.get() 형태로 호출했으므로 this 가 newSports 인스턴스를 참조해야 하는데 window 오브젝트를 참조한다는 점입니다.    
..setTimeout() 함수의 콜백 함수를 화살표함수로 작성하면, this 가 setTimeout() 이 포함된 함수의 인스턴스를 참조합니다.

..prototype 에 화살표함수를 연결하면, 화살표함수 블록에서 this 가 인스턴스를 참조하지 못합니다.

..add() 는 화살표함수입니다. newSports.add() 형태로 호출하므로 this.count 에서 this 가 newSports 인스턴스를 참조해야 하는데 window 오브젝트를 참조합니다. 따라서 newSports 인스턴스의 count 에 1 을 더하지 않고 window 오브젝트의 count 에 1 을 더합니다.  

..한편 window 오브젝트에 count 프로퍼티가 없는데도 에러가 발생하지 않습니다. 오브젝트에서 프로퍼티 값을 구할때 프로퍼티가 없으면 undefined 를 반환합니다.
..count 프로퍼티가 없으므로 undefined 를 반환하게 되고, 여기에 1 을 더하므로 NaN(Not a Number) 가 되어 count 에 설정됩니다. 이는 자바스크립트의 보편적인 처리방법입니다.

..지금까지 보았듯이 prototype 에 화살표함수를 연결하면, this 가 메서드를 호출한 인스턴스를 참조하지 않고 window 오브젝트를 참조합니다. 따라서 화살표함수가 아닌 function 키워드 함수를 prototype 에 연결해야 합니다.
