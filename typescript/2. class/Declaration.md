# Declaration

```javascript
class Rectangle {
    width: number;
    height: number;
    name: string;

    constructor(width: number, height: number, name: string) {
        this.width = width;
        this.height = height;
        this.name = name;
    }
    
    getArea(): number {
        return this.width * this.height;
    }
}

let rect = new Rectangle(10, 10, '사각형');
rect.getArea();
```
- 클래스에서 선언한 값만 프로퍼티로 사용 가능함
- 멤버변수는 클래스 내부에 타입과 함께 선언하거나 생성자에서 선언할 수 있음
- this 를 통해서 클래스 내에서 다른 멤버 참조
- new 를 통해서 클래스의 인스턴스 생성

