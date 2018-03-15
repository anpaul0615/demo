# Like Interface

```javascript
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };
let point: Point = { x: 1, y: 2 };
```
- 클래스 선언은 인스턴스를 나타내는 타입과 생성자 함수를 만드는 동작을 내부적으로 수행함  
  (문법설탕)
- 클래스는 타입이 만들어지기 때문에 인터페이스와 같은 방식으로 사용할 수 있음

