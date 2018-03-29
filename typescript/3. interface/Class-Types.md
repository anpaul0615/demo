# Class Types

```javascript
interface ClockInterface {
    currentTime: Date;
}
class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```
```javascript
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}
class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```
- 인터페이스의 일반적인 사용방법은 클래스가 특정 인터페이스를 구현하도록 적용하는 것임
- 인터페이스는 클래스의 public 영역만 정의할 수 있음  
  (클래스를 사용하여 클래스 인스턴스의 private 영역을 검사할 수 없음)


---
```javascript
interface ClockConstructor {
    new (hour: number, minute: number);
}
class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }  //error..!
}
```
- 인터페이스에 Construct Signature 를 선언하는 것으로 생성자 함수의 호출구조를 정의할 수 있음
- 클래스가 인터페이스를 구현할 때, 타입검사기는 인스턴스 영역만 검사함  
  하지만 생성자함수는 Static 영역에 존재하기때문에 타입검사기의 검사에 포함되지 않음  
  (아마도 error 가 나는 이유는 타입스크립트가 컴파일된 이후의 자바스크립트에서 생성자함수가 보이지 않기 때문인듯)


---
```javascript
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
```
- 인터페이스에서 생성자함수를 정의하고 클래스에서 이를 구현하기 위해서는, 인터페이스를 인스턴스 영역과 생성자 영역으로 구분해서 선언해야함
- 생성자 인터페이스는 인스턴스 인터페이스를 반환하는 함수를 가지며, 이 생성자 인스턴스를 구현한 함수를 통해서 인스턴스를 생성하는 방식임

