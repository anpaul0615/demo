# Function Types

```javascript
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
```
- 인터페이스에 함수타입의 프로퍼티를 선언할 수 있음
- Name 부분은 함수의 호출구조(call signature) 를 정의하고, Type 부분은 리턴타입을 정의함
- 타입검사기는 함수 파라미터를 한번에 하나씩, 서로 대응하는 각 파라미터의 위치와 타입을 매핑해서 검사함


---
```javascript
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}
```
- 함수의 파라미터 이름이 같을 필요는 없음


---
```javascript
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}
```
- 함수의 파라미터 타입을 지정하지 않은 경우, 타입검사기는 Contextual typing 을 통해 파라미터 타입을 유추함
- 함수의 리턴 타입은 반환하는 값에 의해 암묵적으로 유추하며, 인터페이스에 선언된 타입과 일치하지 않는다면 경고(warn) 를 발생시킴


