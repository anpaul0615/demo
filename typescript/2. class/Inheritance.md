# Inheritance

```javascript
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```
- extends 를 통해서 자식클래스를 작성할 수 있음
- 자식클래스는 부모클래스의 멤버에 접근할 수 있음


---
```javascript
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```
- 생성자를 가지는 자식클래스는 반드시 super() 를 호출해야함
- 자식클래스의 생성자에서 this 를 사용하기 위해서는 반드시 super() 가 먼저 호출되어야 함
- 자식클래스는 부모클래스로부터 상속받은 메소드를 재정의(오버라이딩) 할 수 있음

