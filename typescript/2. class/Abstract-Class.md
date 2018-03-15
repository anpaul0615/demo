# Abstract Class

```javascript
abstract class Animal {
    abstract makeSound(): void;
    
    move(): void {
        console.log("roaming the earth...");
    }
}
```
- 추상클래스는 추상메소드(Abstract method)를 가질수있는 클래스임
- 추상클래스를 상속하는 클래스는 반드시 추상메소드를 '구현' 해야함
- 추상클래스는 인스턴스를 생성할 수 없음
  (상속용으로만 기능함)
- 인터페이스와 다른점은, 추상클래스는 추상메소드 뿐만 아니라 실제 구현이 있는 메소드도 포함할 수 있다는 것임

