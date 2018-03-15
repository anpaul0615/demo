# Access Modifier

```javascript
class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number, private name: string) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}
const rect = new Rectangle(10, 10, '사각형');
rect.getArea(); // 100
```
- 접근제한자 public/protected/praivate 를 사용할수있음
  (기본 접근제한자는 public)
- public 은 접근 제한 없음
- private 은 클래스 내부에서만 접근 가능
- protected 는 클래스 내부와 해당 클래스를 상속받은 자식클래스에서만 접근 가능
- 생성자의 인수에 접근제한자를 설정하면 해당 클래스에 그 인수의 이름과 같은 프로퍼티가 정의되고, 넘겨진 인수의 값으로 초기화됨
- ts-node 로 테스트하면 클래스 외부에서 private 멤버에 접근할수있는데, 이는 해당 repl 에서 아직 접근제한자를 인식하지 못하는것으로 보임
  (typescript 컴파일러는 제대로 인식해서 에러로 판단함)


---
```javascript
class Rectangle {
    private readonly width: number;
    private readonly height: number;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    setWidth(width) {
        this.width = width; // ERROR: Left-hand side of assignment expression cannot be a constant or a read-only property.
    }
}
```
- readonly 제한자로 프로퍼티를 읽기전용으로 지정할 수 있음
  (프로퍼티에 const 를 적용하는 느낌)
- readonly 는 다른 접근제한자와 함께 사용할 수 있음
- readonly 프로퍼티는 선언 또는 생성자에서만 초기화되며, 초기화 이후 새 값이 할당될때 에러 발생
- readonly 제한자 역시 생성자 인수에 사용되면, 자동으로 인수 이름으로 프로퍼티가 선언되고 인수 값이 할당됨

