# Hybrid Types

```javascript
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { console.log(start); start = start; };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```
- 하이브리드 타입은 함수이기도 하면서 오브젝트이기도 한 인터페이스임
- 하이브리드 타입 인터페이스의 오브젝트는, 인터페이스에 정의된 함수 구조를 가지면서도 또 그 오브젝트가 프로퍼티도 함께 가지고 있음 (오브젝트는 오브젝트, 함수도 오브젝트)

