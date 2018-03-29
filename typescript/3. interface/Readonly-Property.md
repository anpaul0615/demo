# Structural Typing

```javascript
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```
- readonly 를 통해서 프로퍼티를 읽기전용으로 선언할 수 있음
- readonly 프로퍼티는 단 한번만 값을 할당할 수 있음


---
```javascript
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!

a = ro as number[]; // OK!
```
- ReadonlyArray 는 기본적으로는 Array 와 동일하지만, 수정가능한 메서드가 제거된 Array 임.
- 하지만 Type assertion 을 통해서 override 할 수는 있음


---
```javascript
interface Point {
    readonly x: number;
}

let p1: Point = { x: 10 };

const x = 10;
```
- readonly 와 const 는 개념적으로 같은 의미이며, 변수선언에서는 const 를 사용하고 프로퍼티에서는 readonly 를 사용함

