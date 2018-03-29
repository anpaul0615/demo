# Extending Interfaces

```javascript
interface Shape {
    color: string;
}
interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
```
- 인터페이스를 상속받을 수 있음 (인터페이스 확장)


```javascript
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```
- 여러 인터페이스를 상속받을 수 있음 (인터페이스 조합)

