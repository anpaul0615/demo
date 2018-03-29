# Structural Typing

```javascript
interface Quackable {
  quack(): void;
}

class Duck implements Quackable {
  quack() {
    console.log('quack!');
  }
}

class Person {
  quack() {
    console.log('quack! quack!');
  }
}

function makeSomeNoiseWith(duck: Quackable): void {
  duck.quack();
}

makeSomeNoiseWith(new Duck()); // OK
makeSomeNoiseWith(new Person()); // OK
```
- 명시적으로 인터페이스를 구현하지 않더라도 인터페이스의 요구사항을 따른다면, 타입검사기는 에러를 발생시키지 않음
- 덕타이핑(duck typing) 또는 구조적타이핑(structural subtyping) 이라고 불림


---
``` javascript
// classical approach
if (is(someObject, IDuck))
  cast(someObject, IDuck).quack()

// duck typing
if (hasMethod(someObject, 'quack'))
  someObject.quack();
```
- "is it?" 을 확인하기보다는 "does it?" 을 확인하는 개념  
  (참조 : https://softwareengineering.stackexchange.com/a/259946)

