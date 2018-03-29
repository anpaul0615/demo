# Excess Property Checks

```javascript
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
}

// error: 'colour' not expected in type 'SquareConfig'
let mySquare = createSquare({ colour: "red", width: 100 });
```
- 인터페이스에서 선언되지 않은 속성이 사용되었을때, 타입검사기가 에러를 발생시킴
  (excess property checking)


---
```javascript
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
```
- Type assertion 을 통해 이 검사를 우회할수있음
- 객체가 다른 용도로 사용되는 몇가지 추가 속성들을 가질 수 있다는게 확신되면, Index Signature 를 추가하는게 좋을 수 있음


---
```javascript
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
```
- Index Signature 가 선언된 인터페이스는 명시적으로 선언된 프로퍼티를 제외한 임의의 타입을 가지는 임의의 속성들을 가질수 있음
- 하지만 대부분의 초과속성문제(excess property error) 는 버그이므로, 해당 인터페이스의 타입선언부를 수정하는게 바람직함

