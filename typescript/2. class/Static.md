# Static

```javascript
class Rectangle {
    static count: number = 0;

    constructor() {
        Rectangle.count++;
    }

    static getCount(): number {
        return Rectangle.count;
    }
}

new Rectangle();
new Rectangle();
console.log(Rectangle.count);  // 2
console.log(Rectangle.getCount());  // 2

let rect = new Rectangle();
console.log(rect.count);  // undefined
console.log(rect.getCount());  // getCount() is not a function
```
- static 키워드를 통해 정적 메소드와 정적 프로퍼티 선언
- static 프로퍼티와 메소드는 내부적으로 클로저로 처리됨  
  (클래스 인스턴스 없이 직접 접근 가능)  
  (클래스 인스턴스에서는 접근 불가능)  

